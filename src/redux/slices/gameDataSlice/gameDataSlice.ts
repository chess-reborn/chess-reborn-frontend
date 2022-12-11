import { createSlice } from "@reduxjs/toolkit"

const gameDataSlice = createSlice({
  name: "gameData",
  
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