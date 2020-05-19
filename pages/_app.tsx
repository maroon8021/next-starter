import { NextComponentType } from "next"
import { Global, css } from "@emotion/core"
import Head from "next/head"
import reset from "../styles/reset"

const font = css`
  html,
  body {
    font-family: Ubuntu, "Noto Sans JP,Noto Sans Japanese,Noto Sans,sans-serif";
  }
`

type App = {
  Component: NextComponentType
  pageProps: any
}

function MyApp({ Component, pageProps }: App) {
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
