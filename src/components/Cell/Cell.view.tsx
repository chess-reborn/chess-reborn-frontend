import React from "react"

import CellProps from "./Cell.types"
import { CellBackground, CellImage } from "./Cell.styled"

const Cell = ({
  color,
  isSelected,
  pieceImage,
  onClick,
}: CellProps) => (
  <CellBackground isSelected={isSelected} color={color} onClick={onClick}>
    {pieceImage ? <CellImage src={pieceImage} /> : null}
  </CellBackground>
)

export default Cell