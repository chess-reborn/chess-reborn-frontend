import { CSSProperties } from "react"

import styled from "styled-components"

type CellBackgroundProps = {
  color: CSSProperties["backgroundColor"]
  isSelected?: boolean
}

export const CellBackground = styled.div<CellBackgroundProps>`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: ${({ color }) => color};
  ${({ isSelected }) => isSelected && "box-shadow: inset 0px 0px 4px 8px #03C04A;"}
`

export const CellImage = styled.img`
  width: 100%;
  height: 100%;
`