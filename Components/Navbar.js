import Link from "next/link";
import style from "@/styles/Navbar.module.css";
import { useAuthValue } from "@/context/AuthContext";
import { useAuthentication } from "@/hooks/useAuthentication";
export default function Navbar() {
  const { user } = useAuthValue();
  console.log(user)
  return (
    <nav className={style.navbar}>
      <Link href="/" className={style.brand} passHref>
        Mini <span>blog</span>
      </Link>
      <ul className={style.links_list}>
        <li>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        {!user && (
          <>
            <li>
              <Link href="/register" passHref>
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" passHref>
                Login
              </Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/createpost">Create post</Link>
            </li>
          </>
        )}
        <li>
          <Link href="/about" passHref>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
