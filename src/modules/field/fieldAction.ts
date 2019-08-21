import { FieldSetting, CellStatus } from './fieldDomain'

export const SET_FIELD = 'SET_FIELD'
export const CHANGE_CELL_STATUS = 'CHANGE_CELL_STATUS'
export const OPEN_ALL_CELL = 'OPEN_ALL_CELL'

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
export interface OpenAllCellAction {
  type: typeof OPEN_ALL_CELL
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
export function openAllCell(): OpenAllCellAction {
  return {
    type: OPEN_ALL_CELL,
  }
}

export type FieldActionTypes = SetFieldAction | ChangeCellStatusAction | OpenAllCellAction
