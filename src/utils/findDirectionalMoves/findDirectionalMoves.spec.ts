import Pawn from "pieces/Pawn"

import findDirectionalMoves from "./findDirectionalMoves"

test("checks if stops on teammate", () => {
  const currentPiece = new Pawn(1, 0, "black")
  const piecesSetup = [
    new Pawn(1, 1, "black")
  ]
  expect(findDirectionalMoves(currentPiece, piecesSetup, { x: 0, y: 1 })).toHaveLength(0);
});