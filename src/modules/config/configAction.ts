import { ConfigKey } from './configDomain'

export const CHANGE_CONFIG = 'CHANGE_CONFIG'
export const SET_CONFIG_ERROR = 'SET_CONFIG_ERROR'
export const RESET_CONFIG_ERROR = 'RESET_CONFIG_ERROR'

export interface ChangeConfigAction {
  type: typeof CHANGE_CONFIG
  payload: {
    key: ConfigKey
    value: string
  }
}
export interface SetConfigErrorAction {
  type: typeof SET_CONFIG_ERROR
  payload: {
    errors: string[]
  }
}
export interface ResetConfigErrorAction {
  type: typeof RESET_CONFIG_ERROR
}

export function changeConfig(
  key: ChangeConfigAction['payload']['key'],
  value: ChangeConfigAction['payload']['value'],
): ChangeConfigAction {
  return {
    type: CHANGE_CONFIG,
    payload: { key, value },
  }
}
export function setConfigError(errors: SetConfigErrorAction['payload']['errors']): SetConfigErrorAction {
  return {
    type: SET_CONFIG_ERROR,
    payload: { errors },
  }
}
export function resetConfigError(): ResetConfigErrorAction {
  return {
    type: RESET_CONFIG_ERROR,
  }
}

export type ConfigActionTypes = ChangeConfigAction | SetConfigErrorAction | ResetConfigErrorAction
