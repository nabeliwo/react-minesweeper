import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { SettingKey, SettingForm } from '../modules/settingForm/settingFormDomain'
import {
  Actions as SettingActions,
  changeSettingFormValue,
  setSettingFormError,
  resetSettingFormError,
} from '../modules/settingForm/settingFormAction'
import { Actions as GameActions, updateGameSetting } from '../modules/game/gameAction'

import { Config as ConfigComponent } from '../components/Config'
import { settingFormValidator } from '../modules/settingForm/settingFormValidator'

interface StateProps {
  settingForm: State['settingForm']
}

interface DispatchProps {
  handleChange: (key: SettingKey, value: string) => void
  handleSubmit: (value: SettingForm['value']) => void
}

export type ConfigProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  settingForm: state.settingForm,
})

const mapDispatchToProps = (dispatch: Dispatch<SettingActions | GameActions>): DispatchProps => ({
  handleChange: (key, value) => {
    dispatch(changeSettingFormValue(key, value))
  },

  handleSubmit: value => {
    const { valid, errors } = settingFormValidator(value)

    if (!valid) {
      dispatch(setSettingFormError(errors))
      return
    }

    dispatch(resetSettingFormError())
    dispatch(
      updateGameSetting({
        rows: Number(value.rows),
        cols: Number(value.cols),
        bombs: Number(value.bombs),
      }),
    )
  },
})

export const Config = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigComponent)
