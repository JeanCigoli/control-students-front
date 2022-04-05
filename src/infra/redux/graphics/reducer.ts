import { ActionsType } from '../../../domain/redux/action';
import { GraphicsReducer } from '../../../domain/redux/reducers';
import {
  CLEAN_GRAPHICS,
  FETCH_GRAPHICS,
  LIST_GRAPHICS_CLASS,
  LIST_GRAPHICS_SCHOOL,
} from './constants';

const INITIAL_STATE = {
  isFetch: false,
  data: {
    studentsAll: {
      students: 0,
      vacancies: 0,
    },
    classes: [],
  },
} as GraphicsReducer;

const graphicsReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case LIST_GRAPHICS_CLASS:
      return {
        data: {
          ...state.data,
          classes: action.payload,
        },
        isFetch: state.isFetch,
      };
    case LIST_GRAPHICS_SCHOOL:
      return {
        data: {
          ...state.data,
          studentsAll: action.payload,
        },
        isFetch: state.isFetch,
      };
    case CLEAN_GRAPHICS:
      return INITIAL_STATE;
    case FETCH_GRAPHICS:
      return {
        ...state,
        isFetch: action.payload === 'INIT_LOAD',
      };
    default:
      return state;
  }
};

export { graphicsReducer };
