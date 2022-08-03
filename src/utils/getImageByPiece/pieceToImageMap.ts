import WhiteBishop from "assets/WhiteBishop.png"
import WhiteKing from "assets/WhiteKing.png"
import WhiteKnight from "assets/WhiteKnight.png"
import WhitePawn from "assets/WhitePawn.png"
import WhiteQueen from "assets/WhiteQueen.png"
import WhiteRook from "assets/WhiteRook.png"

import BlackBishop from "assets/BlackBishop.png"
import BlackKing from "assets/BlackKing.png"
import BlackKnight from "assets/BlackKnight.png"
import BlackPawn from "assets/BlackPawn.png"
import BlackQueen from "assets/BlackQueen.png"
import BlackRook from "assets/BlackRook.png"

const pieceToImageMap = {
  Bishop: { white: WhiteBishop, black: BlackBishop },
  King: { white: WhiteKing, black: BlackKing },
  Knight: { white: WhiteKnight, black: BlackKnight },
  Pawn: { white: WhitePawn, black: BlackPawn },
  Queen: { white: WhiteQueen, black: BlackQueen },
  Rook: { white: WhiteRook, black: BlackRook },
}

export default pieceToImageMap