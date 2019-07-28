import { SettingForm } from './settingFormDomain'

interface ValidationResponse {
  valid: boolean
  errors: string[]
}

const MAX_CELL_SIZE = 2500

export const settingFormValidator = (value: SettingForm['value']): ValidationResponse => {
  const rows = Number(value.rows)
  const cols = Number(value.cols)
  const bombs = Number(value.bombs)
  const errors: string[] = []

  if (!Number.isInteger(rows) || rows <= 0) errors.push('Enter a numeric value of 0 or more for "rows".')
  if (!Number.isInteger(cols) || cols <= 0) errors.push('Enter a numeric value of 0 or more for "cols".')
  if (!Number.isInteger(bombs) || bombs <= 0) errors.push('Enter a numeric value of 0 or more for "bombs"')

  if (Number.isInteger(rows) && Number.isInteger(cols)) {
    const cellSize = rows * cols

    if (cellSize > MAX_CELL_SIZE) {
      errors.push(`Enter so that the number of cells is less than ${MAX_CELL_SIZE}. The current number of cells is ${cellSize}`)
    }

    if (Number.isInteger(bombs) && cellSize <= bombs) {
      errors.push('Enter the number of bombs to be less than the number of cells.')
    }
  }

  return {
    valid: errors.length < 1,
    errors,
  }
}
