import * as React from 'react'
import styled from 'styled-components'

import { GameProps } from '../modules/game/gameAdapter'
import { Field } from '../modules/field/fieldAdapter'
import { Config } from '../modules/config/configAdapter'
import { Progress } from './Progress'

export const Game: React.FC<GameProps> = ({
  fieldSetting,
  game,
  flags,
  message,
  initializeGame,
  checkTimer,
  handleClickReset,
  handleSubmitConfig,
}) => {
  const onClickReset = React.useCallback(() => {
    handleClickReset(fieldSetting)
  }, [fieldSetting, handleClickReset])

  React.useEffect(() => {
    initializeGame(fieldSetting)
    // as componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Main>
        <Header>
          <button onClick={onClickReset}>reset</button>
          <Result>{message}</Result>
        </Header>
        <FieldWrapper>
          <Field checkTimer={checkTimer} />
        </FieldWrapper>
        <Progress bombs={fieldSetting.bombs} flags={flags} moves={game.moves} elapsedCount={game.elapsedCount} />
      </Main>
      <Bottom>
        <Config handleSubmit={handleSubmitConfig} />
      </Bottom>
      <Description>
        <p>minesweeper built with React.</p>
        <p>PC only.</p>
      </Description>
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
const Main = styled.div`
  padding: 20px;
  border: 1px solid #222;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Result = styled.p`
  min-height: 24px;
  margin: 0;
`
const FieldWrapper = styled.div`
  padding: 10px 0;
`
const Bottom = styled.div`
  margin-top: 20px;
`
const Description = styled.div`
  text-align: center;
`
