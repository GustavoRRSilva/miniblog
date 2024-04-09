import { useState, useEffect } from "react";
import style from "@/styles/Register.module.css";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useRouter } from "next/router";
import { useAuthValue } from "@/context/AuthContext";
export default function register() {
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();

  //redirecionar caso o usuario esteja logado
  const router = useRouter();
  const { user } = useAuthValue();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      console.log(error);
      return;
    }

    const res = await createUser(user);
    console.log(res);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={style.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
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
        <label>
          <span>Confirm Password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className={style.btn}>Cadastrar</button>}
        {loading && (
          <button disabled className={style.btn}>
            Aguarde...
          </button>
        )}
        {error && <p className={style.erro}>{error}</p>}
      </form>
    </div>
  );
}
