import * as React from 'react'
import styled from 'styled-components'

interface Props {
  bombs: number
  flags: number
  moves: number
  elapsedCount: string
}

export const Progress: React.FC<Props> = ({ bombs, flags, moves, elapsedCount }) => (
  <Wrapper>
    <Column>
      <Text>
        {bombs - flags}/{bombs}
      </Text>
      <Text>bombs</Text>
    </Column>

    <Column>
      <Text>{moves}</Text>
      <Text>moves</Text>
    </Column>

    <Column>
      <Text>{elapsedCount}</Text>
      <Text>time</Text>
    </Column>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Column = styled.div`
  text-align: center;
`
const Text = styled.p`
  margin: 0;
`
