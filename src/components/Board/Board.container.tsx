import React, { useEffect, useState } from "react"
import { useActions } from "react-redux-actions-hook"

import * as actions from "redux/slices/gameDataSlice"

import useGameState from "hooks/useGameState"

import Piece from "types/Piece"

import BoardView from "./Board.view"
import findPieceAtPosition from "utils/findPieceAtPosition"

const Board = () => {
  const [selectedPiece, setSelectedPiece] = useState<Piece>()
  const { pieces, currentTeam } = useGameState()
  const { init } = useActions(actions)

  useEffect(() => {
    init()
  }, [])

  return (
    <BoardView
      selectedPiece={selectedPiece}
      pieces={pieces}
      onClickCell={(x, y) => {
        const piece = findPieceAtPosition(pieces, { x, y })
        if (piece && piece.team === currentTeam) {
          setSelectedPiece(piece)
        }
      }}
    />
  )
}

export default Board