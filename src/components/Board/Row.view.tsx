import { ReactElement } from "react"

import { BoardIdentifier } from "./Board.styled"

type RowProps = {
  row: number
  children: ReactElement[]
}

const Row = ({ row, children }: RowProps) => (
  <>
    <BoardIdentifier>
      {8 - row}
    </BoardIdentifier>
    {children}
    <BoardIdentifier>
      {8 - row}
    </BoardIdentifier>
  </>
)

export default Row