import * as React from 'react'
import styled from 'styled-components'

interface Props {
  x: number
  y: number
  isBomb: boolean
  nearbyBombs: number
}

export const Cell: React.FC<Props> = ({ x, y, isBomb, nearbyBombs }) => {
  return <Wrapper onClick={() => console.log(x, y, isBomb)}>{isBomb ? '💣' : nearbyBombs}</Wrapper>
}

const Wrapper = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: #f4f4f4;
  vertical-align: middle;
  cursor: pointer;
`
