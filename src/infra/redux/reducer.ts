import { combineReducers } from 'redux';

import { authReducer } from './authentication/reducer';
import { productsReducer } from './products/reducer';
import { classesReducer } from './classes/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  classes: classesReducer,
});

export { rootReducer };
