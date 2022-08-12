import styled from "styled-components"

export const NavigationContainer = styled.nav`
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