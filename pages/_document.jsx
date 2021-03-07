import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="de">
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1" />

          <title>Kladderadatsch</title>
          <meta name="theme-color" content="#ffffff" />
          <meta name="Description" content="Mood based Task Tracking."></meta>
          <link rel="icon" type="image/png" href="/icon-512.png" />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
