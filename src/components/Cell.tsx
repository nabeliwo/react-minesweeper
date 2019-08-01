import * as React from 'react'
import styled from 'styled-components'

interface Props {
  x: number
  y: number
  isBomb: boolean
  nearbyBombs: number
  onClick: (position: { x: number; y: number }, isBomb: boolean) => void
}

export const Cell: React.FC<Props> = ({ x, y, isBomb, nearbyBombs, onClick }) => {
  const handleClick = React.useCallback(() => {
    onClick({ x, y }, isBomb)
  }, [isBomb, onClick, x, y])

  console.log(nearbyBombs)

  return (
    <Wrapper onClick={handleClick} onContextMenu={() => {}}>
      {isBomb ? '💣' : nearbyBombs}
    </Wrapper>
  )
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
