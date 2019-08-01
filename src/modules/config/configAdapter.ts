import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../../store/reducer'
import { ConfigKey } from './configDomain'
import { ConfigActionTypes, changeConfig } from './configAction'

import { Config as ConfigComponent } from '../../components/Config'

interface StateProps {
  config: State['config']
}

interface DispatchProps {
  handleChange: (key: ConfigKey, value: string) => void
}

export type ConfigProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  config: state.config,
})

const mapDispatchToProps = (dispatch: Dispatch<ConfigActionTypes>): DispatchProps => ({
  handleChange: (key, value) => {
    dispatch(changeConfig(key, value))
  },
})

export const Config = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigComponent)
