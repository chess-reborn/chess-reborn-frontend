import { configureStore } from "@reduxjs/toolkit"

import authSlice from "redux/slices/authSlice"
import gameDataSlice from "redux/slices/gameDataSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    gameData: gameDataSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type RootState = ReturnType<typeof store.getState>

export default store