import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
        
      <Head>
        <meta
          name="description"
          content="Gregorio Vargas Marrero portafolio desarrollador fronted sitio web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}