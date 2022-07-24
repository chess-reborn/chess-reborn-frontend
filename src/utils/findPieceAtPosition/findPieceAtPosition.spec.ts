import Pawn from "pieces/Pawn"

import findPieceAtPosition from "./findPieceAtPosition"

test("checks if it finds piece", () => {
  const piece = new Pawn(1, 1, "black")
  expect(findPieceAtPosition([ piece ], 1, 1)).toMatchObject(piece)
});

test("checks if it finds nothing", () => {
  expect(findPieceAtPosition([ new Pawn(2, 1, "black") ], 1, 1)).toBeFalsy()
});