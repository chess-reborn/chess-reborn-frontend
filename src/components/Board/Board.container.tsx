import React, { useEffect, useState } from "react"
import { useActions } from "react-redux-actions-hook"

import * as actions from "redux/slices/gameDataSlice"

import useGameState from "hooks/useGameState"

import Piece from "types/Piece"
import Position from "types/Position"

import BoardView from "./Board.view"
import findPosition from "utils/findPosition"

const Board = () => {
  const [selectedPiece, setSelectedPiece] = useState<Piece>()
  const { pieces, currentTeam } = useGameState()
  const { init } = useActions(actions)

  useEffect(() => {
    init()
  }, [])

  const onClickCell = ({ x, y }: Position) => {
    const pieceAtCell = findPosition(pieces, { x, y })

    if (pieceAtCell && pieceAtCell.team === currentTeam) {
      // select piece
      return
    }

    if (selectedPiece) {
      const isMovePossible = findPosition(
        selectedPiece.getPossibleMoves(pieces),
        { x, y },
      )

      if (isMovePossible) {
        if (!pieceAtCell) {
          // move to cell
          return
        }
        if (pieceAtCell.team !== currentTeam) {
          // attack at cell
          return
        }
      }
      // unselect piece
      return
    }
  }
  
  return (
    <BoardView
      selectedPiece={selectedPiece}
      pieces={pieces}
      onClickCell={(position) => {
        const piece = findPosition(pieces, position)
        if (piece && piece.team === currentTeam) {
          setSelectedPiece(piece)
        }
      }}
    />
  )
}

export default Board