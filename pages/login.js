import styles from "@/styles/Login.module.css";
import { useRouter } from "next/router";
import { useAuthValue } from "@/context/AuthContext";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useEffect, useState } from "react";
export default function login() {
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { error: authError, loading, login } = useAuthentication();

  //redirecionar caso o usuario esteja logado
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
    console.log(res);
  };
  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  //redirecionar caso o usuario esteja logado
  const router = useRouter();
  const { user } = useAuthValue();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className={styles.btn}>Cadastrar</button>}
        {loading && (
          <button disabled className={styles.btn}>
            Aguarde...
          </button>
        )}
        {error && <p className={styles.erro}>{error}</p>}
      </form>
    </div>
  );
}
