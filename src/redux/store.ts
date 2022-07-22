import { configureStore } from "@reduxjs/toolkit"

import gameDataSlice from "redux/slices/gameDataSlice"

const store = configureStore({
  reducer: {
    gameData: gameDataSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type RootState = ReturnType<typeof store.getState>

export default store