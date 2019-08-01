import * as React from 'react'
import styled from 'styled-components'

import { CellStatus } from '../modules/field/fieldDomain'

interface Props {
  x: number
  y: number
  index: number
  status: CellStatus
  isBomb: boolean
  nearbyBombs: number
  onClick: (position: { x: number; y: number }, index: number, status: CellStatus, nearbyBombs: number, isBomb: boolean) => void
}

export const Cell: React.FC<Props> = ({ x, y, index, status, isBomb, nearbyBombs, onClick }) => {
  const handleClick = React.useCallback(() => {
    onClick({ x, y }, index, status, nearbyBombs, isBomb)
  }, [index, isBomb, nearbyBombs, onClick, status, x, y])

  let value = ''

  if (status === CellStatus.Flag) value = '🚩'
  if (status === CellStatus.Open) {
    value = isBomb ? '💣' : `${nearbyBombs}`
  }

  return (
    <Wrapper onClick={handleClick} onContextMenu={() => {}}>
      {value}
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
