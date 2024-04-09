import Link from "next/link";
import style from "@/styles/Navbar.module.css";
import { useAuthValue } from "@/context/AuthContext";
import { useAuthentication } from "@/hooks/useAuthentication";
export default function Navbar() {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
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
              <Link href={user ? "/dashboard" : "/"}>Dashboard</Link>
            </li>
            <li>
              <Link href={user ? "/createpost" : "/"}>Create post</Link>
            </li>
          </>
        )}
        <li>
          <Link href="/about" passHref>
            Sobre
          </Link>
        </li>
        {user && (
          <>
            <li>
              <button className={style.logout} onClick={logout}>
                Sair
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
