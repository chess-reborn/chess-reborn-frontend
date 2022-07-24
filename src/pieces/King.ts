import WhiteKing from "assets/WhiteKing.png"
import BlackKing from "assets/BlackKing.png"

import filterMoves from "utils/filterMoves"
import findPieceAtPosition from "utils/findPieceAtPosition"

import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"

export default class King implements Piece {
  public x
  public y
  public team
  public image = ""

  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
    if (team === "white") {
      this.image = WhiteKing
    }
    if (team === "black") {
      this.image = BlackKing
    }
  }

  public getPossibleMoves = (pieces: Piece[]) => {
    const moves = [] as Position[]
    for (let i = -1; i < 1; i++) {
      for (let j = -1; j < 1; j++) {
        const move = {
          x: this.x + i,
          y: this.y + j,
        }
        const piece = findPieceAtPosition(pieces, move.x, move.y)
        if (!piece || this.team !== piece.team) {
          moves.push(move)
        }
      }
    }
    return filterMoves(moves)
  }
}