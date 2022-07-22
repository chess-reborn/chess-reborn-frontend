import { configureStore } from "@reduxjs/toolkit"

import gameDataSlice from "redux/slices/gameDataSlice"

const store = configureStore({
  reducer: {
    gameData: gameDataSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store