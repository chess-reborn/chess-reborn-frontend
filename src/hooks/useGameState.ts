import { useSelector } from "react-redux"
import { RootState } from "redux/store"

const useGameState = () => (
  useSelector<RootState, RootState["gameData"]>(state => state.gameData)
)

export default useGameState