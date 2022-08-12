import { ReactElement } from "react"
import Header from "components/Header"

import { Content } from "./Layout.styled"

type LayoutProps = {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Content>
      {children}
    </Content>
  </>
)

export default Layout