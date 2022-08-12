import WhiteBishop from "assets/classique/WhiteBishop.png"
import WhiteKing from "assets/classique/WhiteKing.png"
import WhiteKnight from "assets/classique/WhiteKnight.png"
import WhitePawn from "assets/classique/WhitePawn.png"
import WhiteQueen from "assets/classique/WhiteQueen.png"
import WhiteRook from "assets/classique/WhiteRook.png"

import BlackBishop from "assets/classique/BlackBishop.png"
import BlackKing from "assets/classique/BlackKing.png"
import BlackKnight from "assets/classique/BlackKnight.png"
import BlackPawn from "assets/classique/BlackPawn.png"
import BlackQueen from "assets/classique/BlackQueen.png"
import BlackRook from "assets/classique/BlackRook.png"

const pieceToImageMap = {
  Bishop: { white: WhiteBishop, black: BlackBishop },
  King: { white: WhiteKing, black: BlackKing },
  Knight: { white: WhiteKnight, black: BlackKnight },
  Pawn: { white: WhitePawn, black: BlackPawn },
  Queen: { white: WhiteQueen, black: BlackQueen },
  Rook: { white: WhiteRook, black: BlackRook },
}

export default pieceToImageMap