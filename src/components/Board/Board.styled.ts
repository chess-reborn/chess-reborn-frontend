import styled from "styled-components"

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  width: calc(8 * 100px);
  border: 4px solid black;
`