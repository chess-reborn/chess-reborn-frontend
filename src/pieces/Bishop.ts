import WhiteBishop from "assets/WhiteBishop.png"
import BlackBishop from "assets/BlackBishop.png"

import findDirectionalMoves from "utils/findDirectionalMoves"

import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"

export default class Bishop implements Piece {
  public x
  public y
  public team
  public image = ""

  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
    if (team === "white") {
      this.image = WhiteBishop
    }
    if (team === "black") {
      this.image = BlackBishop
    }
  }
  
  private moves = [
    { x: -1, y: -1 },
    { x: -1, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
  ]

  public getPossibleMoves = (pieces: Piece[]): Position[] => this.moves.reduce(
    (result, move) => ([
      ...result,
      ...findDirectionalMoves(this, pieces, move)
    ]), [] as Position[],
  )
}