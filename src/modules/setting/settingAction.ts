import { SettingKey } from './settingDomain'

export type Actions = ChangeSetting

export interface ChangeSetting {
  type: 'CHANGE_SETTING'
  payload: {
    key: SettingKey
    value: number
  }
}

export const CHANGE_SETTING = 'CHANGE_SETTING'

export function changeSetting(key: ChangeSetting['payload']['key'], value: ChangeSetting['payload']['value']): ChangeSetting {
  return {
    type: CHANGE_SETTING,
    payload: { key, value },
  }
}
