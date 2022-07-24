import React, {
  useEffect,
} from "react"

import { useActions } from "react-redux-actions-hook"

import useGameState from "hooks/useGameState"

import * as actions from "redux/slices/gameDataSlice"

const Board = () => {
  const { pieces } = useGameState()
  const { init } = useActions(actions)

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      BOARD
    </div>
  )
}

export default Board