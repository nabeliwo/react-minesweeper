import { Field, getBombArray, CellStatus } from './fieldDomain'
import { FieldActionTypes, SET_FIELD, CHANGE_CELL_STATUS, OPEN_ALL_CELL } from './fieldAction'

export const initialState: Field = {
  rows: 10,
  cols: 10,
  bombs: 10,
  bombArray: [],
  cellStatusArray: [],
}

export const fieldReducer = (state: Field = initialState, action: FieldActionTypes): Field => {
  switch (action.type) {
    case SET_FIELD: {
      const { rows, cols, bombs } = action.payload.fieldSetting
      const bombArray = getBombArray(bombs, rows * cols)
      const cellStatusArray = new Array(bombArray.length).fill(0)

      return {
        rows,
        cols,
        bombs,
        bombArray,
        cellStatusArray,
      }
    }

    case CHANGE_CELL_STATUS: {
      const { index, status } = action.payload

      return {
        ...state,
        cellStatusArray: state.cellStatusArray.map((cell, i) => {
          if (i === index) return status
          return cell
        }),
      }
    }

    case OPEN_ALL_CELL: {
      return {
        ...state,
        cellStatusArray: state.cellStatusArray.map(() => CellStatus.Open),
      }
    }

    default:
      return state
  }
}
