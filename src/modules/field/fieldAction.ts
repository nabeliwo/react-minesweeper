import { FieldSetting, CellStatus } from './fieldDomain'

export const SET_FIELD = 'SET_FIELD'
export const CHANGE_CELL_STATUS = 'CHANGE_CELL_STATUS'

export interface SetFieldAction {
  type: typeof SET_FIELD
  payload: {
    fieldSetting: FieldSetting
  }
}
export interface ChangeCellStatusAction {
  type: typeof CHANGE_CELL_STATUS
  payload: {
    index: number
    status: CellStatus
  }
}

export function setField(fieldSetting: SetFieldAction['payload']['fieldSetting']): SetFieldAction {
  return {
    type: SET_FIELD,
    payload: { fieldSetting },
  }
}
export function changeCellStatus(
  index: ChangeCellStatusAction['payload']['index'],
  status: ChangeCellStatusAction['payload']['status'],
): ChangeCellStatusAction {
  return {
    type: CHANGE_CELL_STATUS,
    payload: { index, status },
  }
}

export type FieldActionTypes = SetFieldAction | ChangeCellStatusAction
