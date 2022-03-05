import { ActionsType } from '../../../domain/redux/action';
import { StudentsReducer } from '../../../domain/redux/reducers';
import {
  LIST_ALL_STUDENTS,
  CLEAN_STUDENTS,
  CREATE_STUDENTS,
  FETCH_STUDENTS,
} from './constants';

const INITIAL_STATE = {
  isFetch: false,
  data: [],
} as StudentsReducer;

const studentsReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case LIST_ALL_STUDENTS:
      return {
        data: action.payload,
        isFetch: false,
      };
    case CREATE_STUDENTS:
      return INITIAL_STATE;
    case CLEAN_STUDENTS:
      return INITIAL_STATE;
    case FETCH_STUDENTS:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    default:
      return state;
  }
};

export { studentsReducer };
