import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  height: 80px;

  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
`

export const HeaderLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 8px;

  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
`