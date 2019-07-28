import * as React from 'react'
import styled from 'styled-components'

import { BoardProps } from '../containers/Board'
import { Game } from '../containers/Game'
import { Config } from '../containers/Config'

export const Board: React.FC<BoardProps> = ({ gameSetting, init, startTimer, handleClickReset, handleSubmitConfig }) => {
  React.useEffect(() => {
    init(gameSetting)
    // as componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Game startTimer={startTimer} handleClickReset={handleClickReset} />
      <Bottom>
        <Config handleSubmit={handleSubmitConfig} />
      </Bottom>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-top: 20px;
`
const Bottom = styled.div`
  margin-top: 20px;
`
