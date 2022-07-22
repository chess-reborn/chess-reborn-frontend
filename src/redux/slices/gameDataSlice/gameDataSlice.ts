import { createSlice } from "@reduxjs/toolkit"

import Piece from "types/Piece"
import Team from "types/Team"
import initialBoard from "./initialBoard"

const gameDataSlice = createSlice({
  name: "expression",
  
  initialState: {
    pieces: [] as Piece[],
    currentTeam: "white" as Team 
  },

  reducers: {
    init: (state) => {
      state.pieces = initialBoard
    }
  }
})

export const { init } = gameDataSlice.actions
export default gameDataSlice.reducer