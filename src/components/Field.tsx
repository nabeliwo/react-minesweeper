import * as React from 'react'
import styled from 'styled-components'

import { FieldProps } from '../modules/field/fieldAdapter'
import { getNearbyBombs, posToIndex, CellStatus } from '../modules/field/fieldDomain'
import { Game } from '../modules/game/gameDomain'

import { Cell } from './Cell'

interface Props extends FieldProps {
  checkTimer: (startTime: Game['startTime'], gameOver: boolean) => void
}

export const Field: React.FC<Props> = ({ field, startTime, handleClickCell, handleContextMenuCell, checkTimer }) => {
  const rowArray = new Array(field.rows).fill(null)
  const colArray = new Array(field.cols).fill(null)

  const onClickCell = React.useCallback(
    (position: { x: number; y: number }, index: number, status: CellStatus, nearbyBombs: number, isBomb: boolean) => {
      checkTimer(startTime, isBomb)
      handleClickCell(position, index, status, nearbyBombs, isBomb)
    },
    [handleClickCell, startTime, checkTimer],
  )

  return (
    <Grid colSize={field.cols}>
      {rowArray.map((_, i) => (
        <div key={i}>
          {colArray.map((__, j) => {
            const position = { x: j, y: i }
            const index = posToIndex({ x: j, y: i }, field.cols)

            return (
              <Column key={j}>
                <Cell
                  x={j}
                  y={i}
                  index={index}
                  status={field.cellStatusArray[index] || 0}
                  isBomb={field.bombArray[index] || false}
                  nearbyBombs={getNearbyBombs(field.bombArray, field.cols, position)}
                  onClick={onClickCell}
                  onContextMenu={handleContextMenuCell}
                  bomb="💩"
                  nonbomb="🐾"
                />
              </Column>
            )
          })}
        </div>
      ))}
    </Grid>
  )
}

const BUTTON_WIDTH = 20
const BUTTON_MARGIN = 5

const Grid = styled.div`
  width: ${({ colSize }: { colSize: number }) => (BUTTON_WIDTH + BUTTON_MARGIN * 2) * colSize}px;
`
const Column = styled.div`
  display: inline-block;
  margin: 5px;
`
