import { combineReducers } from 'redux';

import appReducer from './appReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer';

const HighlightReducer = combineReducers({
  appReducer,
  dataReducer,
  userReducer
});

export default HighlightReducer;
