import * as React from 'react'
import styled from 'styled-components'

import { Config } from '../containers/Config'

export const Board: React.FC<{}> = () => (
  <Wrapper>
    <Config />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding-top: 20px;
`
