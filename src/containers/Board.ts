import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { Actions as GameActions, setMap } from '../modules/game/gameAction'
import { GameSetting } from '../modules/game/gameDomain'

import { Board as BoardComponent } from '../components/Board'

interface StateProps {
  gameSetting: GameSetting
}

interface DispatchProps {
  setMap: (gameSetting: GameSetting) => void
}

export type BoardProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  gameSetting: {
    rows: state.game.rows,
    cols: state.game.cols,
    bombs: state.game.bombs,
  },
})

const mapDispatchToProps = (dispatch: Dispatch<GameActions>): DispatchProps => ({
  setMap: (gameSetting: GameSetting) => {
    dispatch(setMap(gameSetting))
  },
})

export const Board = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardComponent)
