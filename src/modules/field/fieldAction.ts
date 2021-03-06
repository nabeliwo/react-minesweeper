import { FieldSetting, CellStatus } from './fieldDomain'

export const SET_FIELD = 'SET_FIELD'
export const CHANGE_CELL_STATUS = 'CHANGE_CELL_STATUS'
export const OPEN_ALL_CELL = 'OPEN_ALL_CELL'
export const OPEN_NEIGHBOR_CELLS = 'OPEN_NEIGHBOR_CELLS'

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
export interface OpenNeighborCellsAction {
  type: typeof OPEN_NEIGHBOR_CELLS
  payload: {
    position: {
      x: number
      y: number
    }
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
export function openAllCell(): OpenAllCellAction {
  return {
    type: OPEN_ALL_CELL,
  }
}
export function openNeighborCells(position: OpenNeighborCellsAction['payload']['position']): OpenNeighborCellsAction {
  return {
    type: OPEN_NEIGHBOR_CELLS,
    payload: { position },
  }
}

export type FieldActionTypes = SetFieldAction | ChangeCellStatusAction | OpenAllCellAction | OpenNeighborCellsAction
