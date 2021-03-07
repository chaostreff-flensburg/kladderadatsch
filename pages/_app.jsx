// pages/_app.js
import React from "react";
import Head from "next/head";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
