import { combineReducers } from 'redux';

import { authReducer } from './authentication/reducer';
import { studentsReducer } from './students/reducer';
import { classesReducer } from './classes/reducer';
import { graphicsReducer } from './graphics/reducer';
import { periodsReducer } from './period/reducer';
import { classesTypeReducer } from './classes-type/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  classes: classesReducer,
  graphics: graphicsReducer,
  periods: periodsReducer,
  classesType: classesTypeReducer,
});

export { rootReducer };
