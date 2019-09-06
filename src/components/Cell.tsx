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
  onContextMenu: (index: number, status: CellStatus) => void
  bombEmoji: string
  nonbombEmoji: string
}

interface ContextMenuEvent {
  preventDefault: () => void
}

export const Cell: React.FC<Props> = ({
  x,
  y,
  index,
  status,
  isBomb,
  nearbyBombs,
  onClick,
  onContextMenu,
  bombEmoji,
  nonbombEmoji,
}) => {
  const handleClick = React.useCallback(() => {
    onClick({ x, y }, index, status, nearbyBombs, isBomb)
  }, [index, isBomb, nearbyBombs, onClick, status, x, y])
  const handleContextMenu = React.useCallback(
    (e: ContextMenuEvent) => {
      e.preventDefault()
      onContextMenu(index, status)
    },
    [index, onContextMenu, status],
  )

  let value = ''

  if (status === CellStatus.Flag) value = '🚩'
  if (status === CellStatus.Open) {
    if (isBomb) {
      value = bombEmoji
    } else if (nearbyBombs === 0) {
      value = nonbombEmoji
    } else {
      value = `${nearbyBombs}`
    }
  }

  return (
    <Wrapper onClick={handleClick} onContextMenu={handleContextMenu} className={!value ? 'empty' : ''}>
      {value}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  vertical-align: middle;
  cursor: pointer;

  &.empty {
    background-color: #f4f4f4;
  }
`
