import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../../store/reducer'
import { FieldSetting, getGameStatusMessage, CellStatus } from '../field/fieldDomain'
import { FieldActionTypes, setField } from '../field/fieldAction'
import { Config, configValidator } from '../config/configDomain'
import { ConfigActionTypes, setConfigError, resetConfigError } from '../config/configAction'
import { Game as IGame, getElapsedCount } from './gameDomain'
import { GameActionTypes, startTimer, setCount, resetGame } from './gameAction'

import { Game as GameComponent } from '../../components/Game'

interface StateProps {
  fieldSetting: FieldSetting
  game: IGame
  flags: number
  message: string
}

interface DispatchProps {
  initializeGame: (fieldSetting: FieldSetting) => void
  checkTimer: (startTime: IGame['startTime'], gameOver: boolean) => void
  handleClickReset: (fieldSetting: FieldSetting) => void
  handleSubmitConfig: (config: Config['value']) => void
}

export type GameProps = StateProps & DispatchProps

const fieldStateToProps = ({ field, game }: State): StateProps => ({
  fieldSetting: {
    rows: field.rows,
    cols: field.cols,
    bombs: field.bombs,
  },
  game,
  flags: field.cellStatusArray.filter(status => status === CellStatus.Flag).length,
  message: getGameStatusMessage(field.bombArray, field.cellStatusArray),
})

const fieldDispatchToProps = (dispatch: Dispatch<FieldActionTypes | ConfigActionTypes | GameActionTypes>): DispatchProps => {
  const TIMER_RATE = 100
  let timerID: any

  console.log(TIMER_RATE, getElapsedCount, startTimer, setCount)

  return {
    initializeGame: (fieldSetting: FieldSetting) => {
      dispatch(setField(fieldSetting))
    },

    checkTimer: (startTime, gameOver) => {
      if (gameOver) {
        clearInterval(timerID)
        return
      }

      if (startTime) return

      // const currentTime = new Date()

      // dispatch(startTimer(currentTime))

      // timerID = setInterval(() => {
      //   const elapsedCount = getElapsedCount(currentTime)
      //   dispatch(setCount(elapsedCount))
      // }, TIMER_RATE)
    },

    handleClickReset: fieldSetting => {
      clearInterval(timerID)
      dispatch(resetGame())
      dispatch(setField(fieldSetting))
    },

    handleSubmitConfig: (config: Config['value']) => {
      const { valid, errors } = configValidator(config)

      if (!valid) {
        dispatch(setConfigError(errors))
        return
      }

      const fieldSetting = {
        rows: Number(config.rows),
        cols: Number(config.cols),
        bombs: Number(config.bombs),
      }

      clearInterval(timerID)
      dispatch(resetGame())
      dispatch(resetConfigError())
      dispatch(setField(fieldSetting))
    },
  }
}

export const Game = connect(
  fieldStateToProps,
  fieldDispatchToProps,
)(GameComponent)
