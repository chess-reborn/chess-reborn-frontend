import Position from "types/Position"
import Team from "types/Team"

interface Piece extends Position {
  team: Team
  image: string
  getPossibleMoves: (pieces: Piece[]) => Position[]
}

export default Piece