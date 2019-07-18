import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { SettingKey, Setting } from '../modules/setting/settingDomain'
import { Actions, changeSetting } from '../modules/setting/settingAction'

import { Config as ConfigComponent } from '../components/Config'

interface StateProps {
  setting: State['setting']
}

interface DispatchProps {
  changeSetting: (key: SettingKey, value: number) => void
  saveSetting: (setting: Setting) => void
}

export type ConfigProps = StateProps & DispatchProps

const mapStateToProps = (state: State) => ({
  setting: state.setting,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  changeSetting: (key: SettingKey, value: number) => {
    dispatch(changeSetting(key, value))
  },

  saveSetting: (setting: Setting) => {
    // TODO: Restart game
    console.log(setting)
  },
})

export const Config = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigComponent)
