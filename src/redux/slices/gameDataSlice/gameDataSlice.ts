import { createSlice } from "@reduxjs/toolkit"

import Piece from "types/Piece"
import Team from "types/Team"

const gameDataSlice = createSlice({
  name: "expression",
  
  initialState: {
    pieces: [] as Piece[],
    currentTeam: "white" as Team 
  },

  reducers: {
    
  }
})

export const { } = gameDataSlice.actions
export default gameDataSlice.reducer