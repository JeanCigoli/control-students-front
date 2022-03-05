import { combineReducers } from 'redux';

import { authReducer } from './authentication/reducer';
import { studentsReducer } from './students/reducer';
import { classesReducer } from './classes/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  classes: classesReducer,
});

export { rootReducer };
