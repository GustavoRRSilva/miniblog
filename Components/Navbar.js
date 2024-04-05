import Link from "next/link";
import style from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter(); // Função para determinar se o link está ativo com base no pathname
  const isActive = (pathname) => router.pathname === pathname;
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
        <li>
          <Link href="/about" passHref>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
