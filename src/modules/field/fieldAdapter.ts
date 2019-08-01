import { connect } from 'react-redux'
// import { Dispatch } from 'redux'

import { State } from '../../store/reducer'

import { Field as FieldComponent } from '../../components/Field'

interface StateProps {
  field: State['field']
  startTime: State['game']['startTime']
}

interface DispatchProps {
  handleClickCell: (position: { x: number; y: number }, isBomb: boolean) => void
}

export type FieldProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  field: state.field,
  startTime: state.game.startTime,
})

const mapDispatchToProps = (/* dispatch: Dispatch<any> */): DispatchProps => ({
  handleClickCell: (position, isBomb) => {
    // dispatch(increaseMove())
    console.log(position, isBomb)
  },
})

export const Field = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FieldComponent)
