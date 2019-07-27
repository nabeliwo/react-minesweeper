import * as React from 'react'
import styled from 'styled-components'

import { GameProps } from '../containers/Game'

export const Game: React.FC<GameProps> = ({ game, handleClickReset, handleClickCell }) => {
  const rowArray = new Array(game.rows).fill(null)
  const colArray = new Array(game.cols).fill(null)

  const onClickCell = React.useCallback(() => handleClickCell(game.startTime), [game.startTime, handleClickCell])
  const onClickReset = React.useCallback(() => handleClickReset(game.startTime), [game.startTime, handleClickReset])

  return (
    <Wrapper>
      <button onClick={onClickReset}>reset</button>

      <Grid colSize={game.cols}>
        {rowArray.map((_, i) => (
          <div key={i}>
            {colArray.map((__, j) => (
              <Column key={j} onClick={onClickCell} />
            ))}
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
const Column = styled.button`
  width: 20px;
  height: 20px;
  margin: 5px;
  padding: 0;
  border: none;
  background-color: #f4f4f4;
  cursor: pointer;
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
