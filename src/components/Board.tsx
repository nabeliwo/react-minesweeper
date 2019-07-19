import * as React from 'react'
import styled from 'styled-components'

import { Game } from '../containers/Game'
import { Config } from '../containers/Config'

export const Board: React.FC<{}> = () => (
  <Wrapper>
    <Game />
    <Bottom>
      <Config />
    </Bottom>
  </Wrapper>
)

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
