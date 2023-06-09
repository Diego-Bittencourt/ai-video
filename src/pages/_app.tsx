"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux"
import { Providers } from "../store/provider";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  //setting the initial page as create-video
  useEffect(() => {
    router.push("/create-video");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
