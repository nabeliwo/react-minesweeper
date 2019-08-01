import { FieldSetting } from './fieldDomain'

export const SET_FIELD = 'SET_FIELD'

export interface SetFieldAction {
  type: typeof SET_FIELD
  payload: {
    fieldSetting: FieldSetting
  }
}

export function setField(fieldSetting: SetFieldAction['payload']['fieldSetting']): SetFieldAction {
  return {
    type: SET_FIELD,
    payload: { fieldSetting },
  }
}

export type FieldActionTypes = SetFieldAction
