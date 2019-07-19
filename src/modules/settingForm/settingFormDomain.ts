export type SettingKey = 'cols' | 'rows' | 'bombs'

export interface SettingForm {
  value: {
    cols: string
    rows: string
    bombs: string
  }
  errors: string[]
}
