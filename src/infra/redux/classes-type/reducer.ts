import { ActionsType } from '../../../domain/redux/action';
import { PeriodsReducer } from '../../../domain/redux/reducers';
import { ClassesTypeReducer } from '../../../domain/redux/reducers/classes-type';
import {
  CLEAN_CLASSES_TYPE,
  FETCH_CLASSES_TYPE,
  LIST_ALL_CLASSES_TYPE,
} from './constants';

const INITIAL_STATE = {
  isFetch: false,
  data: [],
} as ClassesTypeReducer;

const classesTypeReducer = (
  state = INITIAL_STATE,
  action: ActionsType
): ClassesTypeReducer => {
  switch (action.type) {
    case LIST_ALL_CLASSES_TYPE:
      return {
        data: action.payload,
        isFetch: state.isFetch,
      };
    case CLEAN_CLASSES_TYPE:
      return INITIAL_STATE;
    case FETCH_CLASSES_TYPE:
      return {
        ...state,
        isFetch: action.payload === 'INIT_LOAD',
      };
    default:
      return state;
  }
};

export { classesTypeReducer };
