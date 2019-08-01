import * as React from 'react'
import styled from 'styled-components'

import { FieldProps } from '../modules/field/fieldAdapter'
import { isBomb, getNearbyBombs } from '../modules/field/fieldDomain'
import { Game } from '../modules/game/gameDomain'

import { Cell } from './Cell'

interface Props extends FieldProps {
  startTimer: (startTime: Game['startTime']) => void
}

export const Field: React.FC<Props> = ({ field, startTime, handleClickCell, startTimer }) => {
  const rowArray = new Array(field.rows).fill(null)
  const colArray = new Array(field.cols).fill(null)

  const onClickCell = React.useCallback(
    (position: { x: number; y: number }, _isBomb: boolean) => {
      startTimer(startTime)
      handleClickCell(position, _isBomb)
    },
    [handleClickCell, startTime, startTimer],
  )

  return (
    <Grid colSize={field.cols}>
      {rowArray.map((_, i) => (
        <div key={i}>
          {colArray.map((__, j) => {
            const position = { x: j, y: i }

            return (
              <Column key={j}>
                <Cell
                  x={j}
                  y={i}
                  isBomb={isBomb(field.bombArray, field.cols, position)}
                  nearbyBombs={getNearbyBombs(field.bombArray, field.cols, position)}
                  onClick={onClickCell}
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
