import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { SettingKey } from '../modules/settingForm/settingFormDomain'
import { Actions, changeSettingFormValue } from '../modules/settingForm/settingFormAction'

import { Config as ConfigComponent } from '../components/Config'

interface StateProps {
  settingForm: State['settingForm']
}

interface DispatchProps {
  handleChange: (key: SettingKey, value: string) => void
}

export type ConfigProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  settingForm: state.settingForm,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>): DispatchProps => ({
  handleChange: (key, value) => {
    dispatch(changeSettingFormValue(key, value))
  },
})

export const Config = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigComponent)
