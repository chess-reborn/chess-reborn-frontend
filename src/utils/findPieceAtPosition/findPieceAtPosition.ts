import Piece from "types/Piece"
import Position from "types/Position"

const findPieceAtPosition = (pieces: Piece[], x: Position["x"], y: Position["y"]) => (
  pieces.find((piece) => piece.y === y && piece.x === x)
)

export default findPieceAtPosition