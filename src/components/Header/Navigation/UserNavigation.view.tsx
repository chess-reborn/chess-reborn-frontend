import { Link } from "react-router-dom"

type UserNavigationProps = {
  logOut: () => void
}

const UserNavigation = ({ logOut }: UserNavigationProps) => (
  <Link to="/">
    username
  </Link>
)

export default UserNavigation