import WhiteElephant from "assets/WhiteElephant.png"
import BlackElephant from "assets/BlackElephant.png"

import filterMoves from "utils/filterMoves"
import findPieceAtPosition from "utils/findPieceAtPosition"

import Piece from "types/Piece"
import Team from "types/Team"

export default class Elephant implements Piece {
  public x
  public y
  public team
  public image = ""

  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
    if (team === "white") {
      this.image = WhiteElephant
    }
    if (team === "black") {
      this.image = BlackElephant
    }
  }

  private moves = [
    { x: -2, y: -2 },
    { x: -2, y: 2 },
    { x: 2, y: -2 },
    { x: 2, y: 2 },
  ]
  
  public getPossibleMoves = (pieces: Piece[]) => filterMoves(
    this.moves.filter((move) => {
      const piece = findPieceAtPosition(pieces, this.x + move.x, this.y + move.y)
      return !piece || piece.team !== this.team
    })
  )
}