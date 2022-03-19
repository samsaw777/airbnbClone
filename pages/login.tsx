import { Auth } from "@supabase/ui";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { supabase } from "../utils/supabaseClient";

const Login: NextPage = () => {
  const { user } = Auth.useUser();
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  //User is present send to / route.

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="min-h-screen max-w-xl mx-auto flex items-center justify-between">
        <Auth
          providers={["google"]}
          supabaseClient={supabase}
          socialColors
          socialLayout="horizontal"
        />
      </main>
    </>
  );
};

export default Login;
