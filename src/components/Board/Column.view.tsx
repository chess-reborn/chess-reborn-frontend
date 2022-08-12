import { ReactElement, Key } from "react"
import range from "utils/range"

import { BoardIdentifier } from "./Board.styled"

const A_BYTE_REPRESENTATION = "A".charCodeAt(0)

type LineOfIdentifiersProps = {
  keyName: Key
}

const LineOfIdentifiers = ({ keyName }: LineOfIdentifiersProps) => (
  <>
    <BoardIdentifier />
    {
      range(8).map(x => (
        <BoardIdentifier key={`column__${keyName}__identifier__${x}`}>
          {String.fromCharCode(A_BYTE_REPRESENTATION + x)}
        </BoardIdentifier>
      ))
    }
    <BoardIdentifier />
  </>
)

type ColumnProps = {
  children: ReactElement[]
}

const Column = ({ children }: ColumnProps) => (
  <>
    <LineOfIdentifiers keyName="top" />
    {children}
    <LineOfIdentifiers keyName="bottom" />
  </>
)

export default Column