import "@/styles/globals.css";

//Context
import MainContainer from "@/Components/MainContainer";

import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthentication } from "@/hooks/useAuthentication";
import { AuthProvider } from "@/context/AuthContext";
export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <AuthProvider value={{ user }}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </AuthProvider>
  );
}
