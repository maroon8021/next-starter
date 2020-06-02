import Head from "next/head"
import Header from "c/common/header"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { DraggableLists } from "c/top/draggable-lists"
import { StateType, reducer } from "c/top/reducers"
import { useReducer } from "react"
import { Input } from "c/top/input"

const container = css`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 10rem;
`

const lists = ["test 1", "test 2", "test 3", "test 4", "test 5"]

const Home = () => {
  const initialState: StateType = {
    lists,
    positionLists: [],
    draggingList: "",
    isDragging: false,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div css={container}>
        <Input />
        <DraggableLists lists={state.lists} dispatch={dispatch} />
      </div>
    </>
  )
}

export default Home
