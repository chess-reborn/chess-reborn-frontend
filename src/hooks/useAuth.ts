import { useSelector } from "react-redux"
import { RootState } from "redux/store"

const useAuth = () => (
  useSelector<RootState, RootState["auth"]>(state => state.auth)
)

export default useAuth