import Team from "types/Team"
import Piece from "types/Piece"

import WhitePawn from "assets/WhitePawn.png"
import BlackPawn from "assets/BlackPawn.png"

export default class Pawn implements Piece {
  public x
  public y
  public team
  public image = ""
  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
    if (team === "white") {
      this.image = WhitePawn
    }
    if (team === "black") {
      this.image = BlackPawn
    }
  }

  getPossibleMoves = (pieces: Piece[]) => {
    return [
      { x: this.x, y: this.y + 1 }
    ]
  }
}