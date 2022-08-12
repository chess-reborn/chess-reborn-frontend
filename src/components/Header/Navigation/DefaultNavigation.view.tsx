import { Link } from "react-router-dom"
import LoginIcon from "assets/icons/LoginIcon"

type DefaultNavigationProps = {
  logIn: () => void
}

const DefaultNavigation = ({ logIn }: DefaultNavigationProps) => (
  <Link to="/" onClick={logIn}>
    <LoginIcon />
    Log in
  </Link>
)

export default DefaultNavigation