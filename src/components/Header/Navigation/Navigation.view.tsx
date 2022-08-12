import UserNavigation from "./UserNavigation.view"
import DefaultNavigation from "./DefaultNavigation.view"
import { NavigationContainer } from "./Navigation.styled"

type NavigationProps = {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
}


const Navigation = ({ isLoggedIn, logIn, logOut }: NavigationProps) => (
  <NavigationContainer>
    {isLoggedIn && <UserNavigation logOut={logOut} />}
    {!isLoggedIn && <DefaultNavigation logIn={logIn} />}
  </NavigationContainer>
)

export default Navigation