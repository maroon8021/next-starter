import { FC, ReactElement } from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const container = css`
  display: flex;
  margin-bottom: 2.4rem;
`

const inputContainer = css`
  width: 90%;
`

const inputStyle = css`
  width: 100%;
  padding: 0.4rem;
`

const buttonContainer = css`
  width: 10%;
`
const buttonStyle = css`
  width: 100%;
  border: #7f7f7f solid 1px;
  padding: 0.5rem;
`

export const Input: FC = (): ReactElement => {
  return (
    <div css={container}>
      <div css={inputContainer}>
        <input css={inputStyle} type="text" />
      </div>
      <div css={buttonContainer}>
        <button css={buttonStyle}>Add</button>
      </div>
    </div>
  )
}
