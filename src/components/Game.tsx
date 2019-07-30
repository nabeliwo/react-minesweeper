import * as React from 'react'
import styled from 'styled-components'

import { GameProps } from '../containers/Game'
import { Game as IGame, isBomb } from '../modules/game/gameDomain'
import { Cell } from './Cell'

interface Props extends GameProps {
  startTimer: () => void
  handleClickReset: (startTime: IGame['startTime']) => void
}

export const Game: React.FC<Props> = ({ game, handleClickReset, handleClickCell, startTimer }) => {
  const rowArray = new Array(game.rows).fill(null)
  const colArray = new Array(game.cols).fill(null)

  const onClickReset = React.useCallback(() => handleClickReset(game.startTime), [game.startTime, handleClickReset])
  const onClickCell = React.useCallback(() => {
    if (!game.startTime) startTimer()
    handleClickCell()
  }, [game.startTime, handleClickCell, startTimer])

  return (
    <Wrapper>
      <button onClick={onClickReset}>reset</button>

      <Grid colSize={game.cols}>
        {rowArray.map((_, i) => (
          <div key={i}>
            {colArray.map((__, j) => {
              return (
                <Column key={j} onClick={onClickCell}>
                  <Cell x={j + 1} y={i + 1} isBomb={isBomb({ x: j, y: i }, game.bombArray)} />
                </Column>
              )
            })}
          </div>
        ))}
      </Grid>

      <Setting>
        <SettingColumn>
          <Text>
            {game.flags}/{game.bombs}
          </Text>
          <Text>bombs</Text>
        </SettingColumn>
        <SettingColumn>
          <Text>{game.moves}</Text>
          <Text>moves</Text>
        </SettingColumn>
        <SettingColumn>
          <Text>{game.elapsedCount}</Text>
          <Text>time</Text>
        </SettingColumn>
      </Setting>
    </Wrapper>
  )
}

const BUTTON_WIDTH = 20
const BUTTON_MARGIN = 5

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid #222;
`
const Grid = styled.div`
  width: ${({ colSize }: { colSize: number }) => (BUTTON_WIDTH + BUTTON_MARGIN * 2) * colSize}px;
  margin: 10px 0;
`
const Column = styled.div`
  display: inline-block;
  margin: 5px;
`
const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SettingColumn = styled.div`
  text-align: center;
`
const Text = styled.p`
  margin: 0;
`
