import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { GameSetting, getElapsedCount, Game } from '../modules/game/gameDomain'
import { SettingForm } from '../modules/settingForm/settingFormDomain'
import { settingFormValidator } from '../modules/settingForm/settingFormValidator'
import { Actions as GameActions, setMap, updateGameSetting, startTimer, setCount, resetGame } from '../modules/game/gameAction'
import {
  Actions as SettingFormActions,
  setSettingFormError,
  resetSettingFormError,
} from '../modules/settingForm/settingFormAction'

import { Board as BoardComponent } from '../components/Board'

interface StateProps {
  gameSetting: GameSetting
}

interface DispatchProps {
  init: (gameSetting: GameSetting) => void
  startTimer: () => void
  handleClickReset: (startTime: Game['startTime']) => void
  handleSubmitConfig: (settingFormValue: SettingForm['value']) => void
}

export type BoardProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  gameSetting: {
    rows: state.game.rows,
    cols: state.game.cols,
    bombs: state.game.bombs,
  },
})

const mapDispatchToProps = (dispatch: Dispatch<GameActions | SettingFormActions>): DispatchProps => {
  const TIMER_RATE = 100
  let timerID: any

  return {
    init: (gameSetting: GameSetting) => {
      dispatch(setMap(gameSetting))
    },

    startTimer: () => {
      const currentTime = new Date()

      dispatch(startTimer(currentTime))

      timerID = setInterval(() => {
        const elapsedCount = getElapsedCount(currentTime)
        dispatch(setCount(elapsedCount))
      }, TIMER_RATE)
    },

    handleClickReset: startTime => {
      if (!startTime) return

      clearInterval(timerID)
      dispatch(resetGame())
    },

    handleSubmitConfig: (settingFormValue: SettingForm['value']) => {
      const { valid, errors } = settingFormValidator(settingFormValue)

      if (!valid) {
        dispatch(setSettingFormError(errors))
        return
      }

      const gameSetting = {
        rows: Number(settingFormValue.rows),
        cols: Number(settingFormValue.cols),
        bombs: Number(settingFormValue.bombs),
      }

      clearInterval(timerID)
      dispatch(resetGame())
      dispatch(resetSettingFormError())
      dispatch(updateGameSetting(gameSetting))
      dispatch(setMap(gameSetting))
    },
  }
}

export const Board = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardComponent)
