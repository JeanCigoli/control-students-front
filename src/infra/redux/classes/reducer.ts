import { ActionsType } from '../../../domain/redux/action';
import { ClassesReducer } from '../../../domain/redux/reducers';
import {
  CLEAN_CLASSES,
  CREATE_CLASSES,
  FETCH_CLASSES,
  LIST_ALL_CLASSES,
} from './constants';

const INITIAL_STATE = {
  isFetch: false,
  data: [],
} as ClassesReducer;

const classesReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case LIST_ALL_CLASSES:
      return {
        data: action.payload,
        isFetch: false,
      };
    case CREATE_CLASSES:
      return INITIAL_STATE;
    case CLEAN_CLASSES:
      return INITIAL_STATE;
    case FETCH_CLASSES:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    default:
      return state;
  }
};

export { classesReducer };
