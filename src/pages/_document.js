import { Html, Head, Main, NextScript } from "next/document"
import Link from "next/link"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="My personal portfolio"
          content="Websit created using create-react-app"
        />
        <link rel="icon" href="/Images/logos/favicon.jpeg" />
        <script
          src="https://kit.fontawesome.com/a388be2306.js"
          crossorigin="anonymous"
          defer="defer"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
