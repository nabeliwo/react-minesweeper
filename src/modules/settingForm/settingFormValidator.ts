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

  if (!Number.isInteger(rows) || rows <= 0) errors.push('rows には0以上の数値を入力してください。')
  if (!Number.isInteger(cols) || cols <= 0) errors.push('cols には0以上の数値を入力してください。')
  if (!Number.isInteger(bombs) || bombs <= 0) errors.push('bombs には0以上の数値を入力してください。')

  if (Number.isInteger(rows) && Number.isInteger(cols)) {
    const cellSize = rows * cols

    if (cellSize > MAX_CELL_SIZE) {
      errors.push(`マスの数が${MAX_CELL_SIZE}未満になるように入力してください。現在のマスの数は${cellSize}です。`)
    }

    if (Number.isInteger(bombs) && cellSize <= bombs) {
      errors.push('爆弾の数はマスの数より少なくしてください。')
    }
  }

  return {
    valid: errors.length < 1,
    errors,
  }
}
