import { ActionsType } from '../../../domain/redux/action';
import { ClassesReducer } from '../../../domain/redux/reducers';
import {
  CLEAN_CLIENTS,
  CREATE_CLIENTS,
  FETCH_CLIENTS,
  LIST_ALL_CLIENTS,
} from './constants';

const INITIAL_STATE = {
  isFetch: false,
} as ClassesReducer;

const classesReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case LIST_ALL_CLIENTS:
      return action.payload;
    case CREATE_CLIENTS:
      return {};
    case CLEAN_CLIENTS:
      return INITIAL_STATE;
    case FETCH_CLIENTS:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    default:
      return state;
  }
};

export { classesReducer };
