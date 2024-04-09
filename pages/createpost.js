import { useAuthValue } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function createPost(second) {
  //redirecionar caso o usuario esteja logado
  const router = useRouter();
  const { user } = useAuthValue();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  return <h1>Create post</h1>;
}
