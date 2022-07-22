import WhiteKnight from "assets/WhiteKnight.png"
import BlackKnight from "assets/BlackKnight.png"

import findPieceAtPosition from "utils/findPieceAtPosition"
import filterMoves from "utils/filterMoves"

import Piece from "types/Piece"
import Team from "types/Team"

export default class Knight implements Piece {
  public x
  public y
  public team
  public image = ""

  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
    if (team === "white") {
      this.image = WhiteKnight
    }
    if (team === "black") {
      this.image = BlackKnight
    }
  }

  private moves = [
    { x: -2, y: -1 },
    { x: -2, y: 1 },
    { x: -1, y: -2 },
    { x: -1, y: 2 },
    { x: 1, y: -2 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 2, y: -1 },
  ]

  private getKnightMove = (pieces: Piece[], offsetX: number, offsetY: number) => {
    const x = this.x + offsetX
    const y = this.y + offsetY
    const piece = findPieceAtPosition(pieces, x, y)
    if (piece) {
      return piece.team !== this.team && { x, y }
    }
  }

  public getPossibleMoves = (pieces: Piece[]) => filterMoves(
    this.moves.map(({ x, y }) => this.getKnightMove(pieces, x, y))
  )
}