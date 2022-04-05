import { ActionsType } from '../../../domain/redux/action';
import { PeriodsReducer } from '../../../domain/redux/reducers';
import { CLEAN_PERIODS, FETCH_PERIODS, LIST_ALL_PERIODS } from './constants';

const INITIAL_STATE = {
  isFetch: false,
  data: [],
} as PeriodsReducer;

const periodsReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case LIST_ALL_PERIODS:
      return {
        data: action.payload,
        isFetch: state.isFetch,
      };
    case CLEAN_PERIODS:
      return INITIAL_STATE;
    case FETCH_PERIODS:
      return {
        ...state,
        isFetch: action.payload === 'INIT_LOAD',
      };
    default:
      return state;
  }
};

export { periodsReducer };
