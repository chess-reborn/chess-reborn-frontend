import React from "react"

import range from "utils/range"
import findPieceAtPosition from "utils/findPieceAtPosition"
import getImageByPiece from "utils/getImageByPiece"

import Piece from "types/Piece"

import Cell from "components/Cell"

import { BoardGrid } from "./Board.styled"

type BoardViewProps = {
  pieces: Piece[]
  onClickCell: (x: number, y: number) => void
  selectedPiece?: Piece
}

const BoardView = ({ selectedPiece, pieces, onClickCell }: BoardViewProps) => (
  <BoardGrid>{
    range(8 * 8).map((index) => {
      const x = index % 8
      const y = Math.floor(index / 8)
      const piece = findPieceAtPosition(pieces, { x, y })

      return (
        <Cell
          key={index}
          isSelected={piece && piece === selectedPiece}
          color={(x + y) % 2 ? "brown" : "wheat"}
          pieceImage={piece && getImageByPiece(piece)}
          onClick={() => onClickCell(x, y)}
        />
      )
    })
  }</BoardGrid>
)

export default BoardView