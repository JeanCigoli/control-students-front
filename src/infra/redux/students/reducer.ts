import { ActionsType } from '../../../domain/redux/action';
import { StudentsReducer } from '../../../domain/redux/reducers';
import {
  LIST_ALL_STUDENTS,
  CLEAN_STUDENTS,
  CREATE_STUDENTS,
  FETCH_STUDENTS,
  DELETE_STUDENTS,
  UPDATE_STUDENTS,
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
        isFetch: state.isFetch,
      };
    case CREATE_STUDENTS:
      return INITIAL_STATE;
    case UPDATE_STUDENTS:
      return INITIAL_STATE;
    case DELETE_STUDENTS:
      return {
        data: action.payload,
        isFetch: state.isFetch,
      };
    case CLEAN_STUDENTS:
      return INITIAL_STATE;
    case FETCH_STUDENTS:
      return {
        ...state,
        isFetch: action.payload === 'INIT_LOAD',
      };
    default:
      return state;
  }
};

export { studentsReducer };
