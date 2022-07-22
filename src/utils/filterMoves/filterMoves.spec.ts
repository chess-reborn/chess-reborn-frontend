import filterMoves from "./filterMoves"

test("checks if moves are filtered correctly", () => {
  const moves = filterMoves([
    null,
    undefined,
    false,
    { x: 1, y: 1 },
    { x: -1, y: 1},
    { x: 1, y: 8 },
  ])

  expect(moves).toHaveLength(1);
  expect(moves[0].x).toBe(1);
  expect(moves[0].y).toBe(1);
});