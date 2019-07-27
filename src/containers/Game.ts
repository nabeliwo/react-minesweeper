import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { Actions, startGame, setCount, resetGame } from '../modules/game/gameAction'
import { Game as IGame, getElapsedCount } from '../modules/game/gameDomain'

import { Game as GameComponent } from '../components/Game'

interface StateProps {
  game: State['game']
}

interface DispatchProps {
  handleClickReset: (startTime: IGame['startTime']) => void
  handleClickCell: (startTime: IGame['startTime']) => void
}

export type GameProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  game: state.game,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>): DispatchProps => {
  const TIMER_RATE = 100
  let timerID: any

  return {
    handleClickReset: startTime => {
      if (!startTime) return

      clearInterval(timerID)
      dispatch(resetGame())
    },

    handleClickCell: startTime => {
      if (!startTime) {
        const currentTime = new Date()

        dispatch(startGame(currentTime))

        timerID = setInterval(() => {
          const elapsedCount = getElapsedCount(currentTime)
          dispatch(setCount(elapsedCount))
        }, TIMER_RATE)

        return
      }

      console.log('game is starting')
    },
  }
}

export const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameComponent)
