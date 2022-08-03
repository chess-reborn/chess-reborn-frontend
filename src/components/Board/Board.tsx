import React, { useEffect } from "react"
import { useActions } from "react-redux-actions-hook"

import * as actions from "redux/slices/gameDataSlice"

import useGameState from "hooks/useGameState"

import range from "utils/range"
import findPieceAtPosition from "utils/findPieceAtPosition"
import getImageByPiece from "utils/getImageByPiece"

import Cell from "components/Cell"

import { BoardGrid } from "./Board.styled"


const Board = () => {
  const { pieces } = useGameState()
  const { init } = useActions(actions)

  useEffect(() => {
    init()
  }, [])

  const Cells = range(8 * 8).map((index) => {
    const x = Math.floor(index / 8)
    const y = index % 8
    
    const piece = findPieceAtPosition(pieces, { x, y })

    return (
      <Cell
        key={index}
        color={(x + y) % 2 ? "brown" : "wheat"}
        pieceImage={piece && getImageByPiece(piece)}
      />
    )
  })

  return (
    <BoardGrid>
      {Cells}
    </BoardGrid>
  )
}

export default Board