import { CSSProperties } from "react"

type CellProps = {
  color: CSSProperties["backgroundColor"]
  pieceImage?: HTMLImageElement["src"]
  isSelected?: boolean
  onClick: () => void
}

export default CellProps