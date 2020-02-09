import { NextComponentType } from "next"
import { Global, css } from "@emotion/core"
import reset from "../styles/reset"


type App = {
  Component : NextComponentType,
  pageProps : any
}

function MyApp({ Component, pageProps }:App) {
  return (<>
  <Global
      styles={css`
        ${reset}
      `}
    />
    <Component {...pageProps} />
  </>
  
  )
}

export default MyApp