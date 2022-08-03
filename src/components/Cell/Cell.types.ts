import { CSSProperties } from "react"

type CellProps = {
  color: CSSProperties["backgroundColor"]
  pieceImage?: HTMLImageElement["src"]
  isSelected?: boolean
}

export default CellProps