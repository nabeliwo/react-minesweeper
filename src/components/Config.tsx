import * as React from 'react'
import styled from 'styled-components'

import { ConfigProps } from '../containers/Config'

interface FormSubmitEvent {
  preventDefault: () => void
}

interface InputChangeEvent {
  currentTarget: {
    value: any
  }
}

export const Config: React.FC<ConfigProps> = ({ setting, saveSetting, changeSetting }) => {
  const handleSubmit = React.useCallback(
    (e: FormSubmitEvent) => {
      e.preventDefault()
      saveSetting(setting)
    },
    [saveSetting, setting],
  )
  const changeRows = React.useCallback((e: InputChangeEvent) => changeSetting('rows', e.currentTarget.value), [changeSetting])
  const changeCols = React.useCallback((e: InputChangeEvent) => changeSetting('cols', e.currentTarget.value), [changeSetting])
  const changeNumberOfBombs = React.useCallback((e: InputChangeEvent) => changeSetting('numberOfBombs', e.currentTarget.value), [
    changeSetting,
  ])

  return (
    <Form onSubmit={handleSubmit}>
      <List>
        <li>
          <input type="text" value={setting.rows} onChange={changeRows} /> x{' '}
          <input type="text" value={setting.cols} onChange={changeCols} />
        </li>
        <li>
          Bomb: <input type="text" value={setting.numberOfBombs} onChange={changeNumberOfBombs} />
        </li>
      </List>
      <Button type="submit">Save and restart game</Button>
    </Form>
  )
}

const Form = styled.form`
  padding: 20px;
  border: 1px solid #222;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li:not(:first-child) {
    margin-top: 10px;
  }
`
const Button = styled.button`
  width: 100%;
  margin-top: 10px;
`
