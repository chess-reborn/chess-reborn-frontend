import Piece from "types/Piece"

import pieceToImageMap from "./pieceToImageMap"

const getImageByPiece = (piece: Piece) => {
  const pieceName = piece.constructor.name as keyof typeof pieceToImageMap
  return pieceToImageMap[pieceName][piece.team]
}

export default getImageByPiece