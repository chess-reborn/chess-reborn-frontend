import Navigation from "./Navigation"
import { HeaderContainer, HeaderLogo } from "./Header.styled"

type HeaderViewProps = {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
}

const HeaderView = ({ isLoggedIn, logIn, logOut }: HeaderViewProps) => (
  <HeaderContainer>
    <HeaderLogo>CHESS REBORN</HeaderLogo>
    <Navigation
      isLoggedIn={isLoggedIn}
      logIn={logIn}
      logOut={logOut}
    />
  </HeaderContainer>
)

export default HeaderView