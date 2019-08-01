import { Field, getBombArray } from './fieldDomain'
import { FieldActionTypes, SET_FIELD } from './fieldAction'

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

    default:
      return state
  }
}
