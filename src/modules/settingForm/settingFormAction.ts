import { SettingKey } from './settingFormDomain'

export type Actions = ChangeSettingFormValue | SetSettingFormError | ResetSettingFormError

export interface ChangeSettingFormValue {
  type: 'CHANGE_SETTING_FORM_VALUE'
  payload: {
    key: SettingKey
    value: string
  }
}
export interface SetSettingFormError {
  type: 'SET_SETTING_FORM_ERROR'
  payload: {
    errors: string[]
  }
}
export interface ResetSettingFormError {
  type: 'RESET_SETTING_FORM_ERROR'
}

export const CHANGE_SETTING_FORM_VALUE = 'CHANGE_SETTING_FORM_VALUE'
export const SET_SETTING_FORM_ERROR = 'SET_SETTING_FORM_ERROR'
export const RESET_SETTING_FORM_ERROR = 'RESET_SETTING_FORM_ERROR'

export function changeSettingFormValue(
  key: ChangeSettingFormValue['payload']['key'],
  value: ChangeSettingFormValue['payload']['value'],
): ChangeSettingFormValue {
  return {
    type: CHANGE_SETTING_FORM_VALUE,
    payload: { key, value },
  }
}
export function setSettingFormError(errors: SetSettingFormError['payload']['errors']): SetSettingFormError {
  return {
    type: SET_SETTING_FORM_ERROR,
    payload: { errors },
  }
}
export function resetSettingFormError(): ResetSettingFormError {
  return {
    type: RESET_SETTING_FORM_ERROR,
  }
}
