import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../../store/reducer'
import { CellStatus } from './fieldDomain'
import { FieldActionTypes, changeCellStatus, openAllCell } from './fieldAction'
import { GameActionTypes, increaseMove } from '../game/gameAction'

import { Field as FieldComponent } from '../../components/Field'

interface StateProps {
  field: State['field']
  startTime: State['game']['startTime']
}

interface DispatchProps {
  handleClickCell: (
    position: { x: number; y: number },
    index: number,
    status: CellStatus,
    nearbyBombs: number,
    isBomb: boolean,
  ) => void
  handleContextMenuCell: (index: number, status: CellStatus) => void
}

export type FieldProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  field: state.field,
  startTime: state.game.startTime,
})

const mapDispatchToProps = (dispatch: Dispatch<FieldActionTypes | GameActionTypes>): DispatchProps => ({
  handleClickCell: (position, index, status, nearbyBombs, isBomb) => {
    if (status === CellStatus.Open || status === CellStatus.Flag) return

    if (isBomb) {
      // game over
      dispatch(openAllCell())
    } else if (nearbyBombs === 0) {
      // expand cell
      dispatch(increaseMove())
      // TODO
    } else {
      dispatch(increaseMove())
      dispatch(changeCellStatus(index, CellStatus.Open))
    }

    console.log(position, status, nearbyBombs, isBomb)
  },

  handleContextMenuCell: (index, status) => {
    if (status === CellStatus.Open) return
    dispatch(changeCellStatus(index, status === CellStatus.Flag ? CellStatus.None : CellStatus.Flag))
  },
})

export const Field = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FieldComponent)
