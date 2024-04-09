import Link from "next/link";
import styles from "@/styles/About.module.css";
export default function About() {
  return (
    <main className={styles.about}>
      <h1>
        Sobre o mini <span>Blog </span>
      </h1>
      <p>
        Este projeto consiste em um blog feito com React no front-emd e Firebase
        no back-end
      </p>
      <Link href="/createpost">
        <button className={styles.btn}>Criar post</button>
      </Link>
    </main>
  );
}
