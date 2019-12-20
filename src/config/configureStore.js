import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import HighlightReducer from '../model/reducers';
import beforeMiddleware from '../model/middlewares';
import afterMiddleware from '../model/middlewares/afterMiddleware';

export default () => {
  const store = createStore(
    HighlightReducer,
    applyMiddleware(
      // thunk,
      // promise,
      // [...beforeMiddleware],
      apiMiddleware,
      // [...afterMiddleware]
    )
  );

  return store;
}

