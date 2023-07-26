import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <title>شورى للخدمات والاستشارات القانونية</title>
        <link
          rel="icon"
          href="https://www.shwra.sa/favicon-32x32.png?v=7028c7be5a45f6b709f6c6a1277999db"
          type="image/png"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
