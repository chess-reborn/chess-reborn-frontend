import styled from "styled-components"

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: 40px repeat(8, 1fr) 40px;

  width: calc(8 * 100px + 2 * 40px);
`

export const BoardIdentifier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  font-weight: bold;
`