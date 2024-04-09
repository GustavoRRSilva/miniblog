import styles from "@/styles/Login.module.css";
import { useRouter } from "next/router";
import { useAuthValue } from "@/context/AuthContext";
import { useEffect } from "react";
export default function login() {
    //redirecionar caso o usuario esteja logado
    const router = useRouter();
    const { user } = useAuthValue();
  
    useEffect(() => {
      if (user) {
        router.push('/');
      }
    }, [user, router]);
  
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
