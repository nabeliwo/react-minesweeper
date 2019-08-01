import * as React from 'react'
import styled from 'styled-components'

import { ConfigProps } from '../modules/config/configAdapter'
import { Config as IConfig } from '../modules/config/configDomain'

interface FormSubmitEvent {
  preventDefault: () => void
}

interface InputChangeEvent {
  currentTarget: {
    value: any
  }
}

interface Props extends ConfigProps {
  handleSubmit: (value: IConfig['value']) => void
}

export const Config: React.FC<Props> = ({ config, handleSubmit, handleChange }) => {
  const { value, errors } = config

  const onSubmit = React.useCallback(
    (e: FormSubmitEvent) => {
      e.preventDefault()
      handleSubmit(value)
    },
    [handleSubmit, value],
  )
  const changeRows = React.useCallback((e: InputChangeEvent) => handleChange('rows', e.currentTarget.value), [handleChange])
  const changeCols = React.useCallback((e: InputChangeEvent) => handleChange('cols', e.currentTarget.value), [handleChange])
  const changeBombs = React.useCallback((e: InputChangeEvent) => handleChange('bombs', e.currentTarget.value), [handleChange])

  return (
    <Form onSubmit={onSubmit}>
      <List>
        <li>
          <Matrix>
            <div>
              <Label>rows</Label>
              <input type="text" value={value.rows} onChange={changeRows} />
            </div>
            <Cross>x</Cross>
            <div>
              <Label>cols</Label>
              <input type="text" value={value.cols} onChange={changeCols} />
            </div>
          </Matrix>
        </li>
        <li>
          bombs: <input type="text" value={value.bombs} onChange={changeBombs} />
        </li>
      </List>

      <Button type="submit">Save and restart game</Button>

      {errors.length > 0 && (
        <Error>
          {errors.map(error => (
            <ErrorMessage key={error}>{error}</ErrorMessage>
          ))}
        </Error>
      )}
    </Form>
  )
}

const Form = styled.form`
  width: 342px;
  margin: 0;
  padding: 20px;
  border: 1px solid #222;
  box-sizing: border-box;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li:not(:first-child) {
    margin-top: 10px;
  }
`
const Matrix = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Label = styled.p`
  margin: 0;
`
const Cross = styled.div`
  padding: 0 10px;
`
const Button = styled.button`
  width: 100%;
  margin-top: 10px;
`
const Error = styled.div`
  margin-top: 10px;
  color: red;
`
const ErrorMessage = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
`
