// pages/_app.js
import React from "react";
import Head from "next/head";

import "../styles/preflight.css";
import "../styles/base.css";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kladderadatsch</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="Description" content="Mood based Task Tracking."></meta>
        <link rel="icon" type="image/png" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
