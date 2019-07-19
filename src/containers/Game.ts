import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { Actions, startGame } from '../modules/game/gameAction'

import { Game as GameComponent } from '../components/Game'

interface StateProps {
  game: State['game']
}

interface DispatchProps {
  startGame: () => void
}

export type GameProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  game: state.game,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>): DispatchProps => ({
  startGame: () => {
    dispatch(startGame(new Date()))
  },
})

export const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameComponent)
