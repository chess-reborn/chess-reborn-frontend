import WhiteRook from "assets/WhiteRook.png"
import BlackRook from "assets/BlackRook.png"

import filterMoves from "utils/filterMoves"
import findDirectionalMoves from "utils/findDirectionalMoves"

import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"

export default class Rook implements Piece {
  public x
  public y
  public team
  public image = ""

  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
    if (team === "white") {
      this.image = WhiteRook
    }
    if (team === "black") {
      this.image = BlackRook
    }
  }
  
  private moves = [
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
  ]

  public getPossibleMoves = (pieces: Piece[]): Position[] => filterMoves(
    this.moves.reduce((result, move) => ([
      ...result,
      ...findDirectionalMoves(this, pieces, move)
    ]), [] as Position[])
  )
}