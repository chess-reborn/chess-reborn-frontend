import WhiteQueen from "assets/WhiteQueen.png"
import BlackQueen from "assets/BlackQueen.png"

import filterMoves from "utils/filterMoves"
import findDirectionalMoves from "utils/findDirectionalMoves"

import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"

export default class Queen implements Piece {
  public x
  public y
  public team
  public image = ""

  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
    if (team === "white") {
      this.image = WhiteQueen
    }
    if (team === "black") {
      this.image = BlackQueen
    }
  }
  
  private moves = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ]

  public getPossibleMoves = (pieces: Piece[]): Position[] => filterMoves(
    this.moves.reduce((result, move) => ([
      ...result,
      ...findDirectionalMoves(this, pieces, move)
    ]), [] as Position[])
  )
}