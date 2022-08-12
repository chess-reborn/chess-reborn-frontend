import range from "utils/range"
import findPosition from "utils/findPosition"
import getImageByPiece from "utils/getImageByPiece"
import Piece from "types/Piece"
import Position from "types/Position"
import Cell from "components/Cell"

import Row from "./Row.view"
import Column from "./Column.view"
import { BoardGrid } from "./Board.styled"

type BoardViewProps = {
  pieces: Piece[]
  onClickCell: (position: Position) => void
  selectedPiece?: Piece
}

const BoardView = ({ selectedPiece, pieces, onClickCell }: BoardViewProps) => (
  <BoardGrid>
    <Column>{
      range(8).map(y => (
        <Row key={`row__${y}`} row={y}>{
          range(8).map(x => {
            const piece = findPosition(pieces, { x, y })
            return (
              <Cell
                key={`cell__${x * 8 + y}`}
                isSelected={piece && piece === selectedPiece}
                color={(x + y) % 2 ? "brown" : "wheat"}
                pieceImage={piece && getImageByPiece(piece)}
                onClick={() => onClickCell({ x, y })}
              />
            )
          })
        }</Row>
      ))
    }</Column>
  </BoardGrid>
)

export default BoardView