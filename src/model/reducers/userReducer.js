import { USER_IS_AUTH, USER_ROLE } from '../actions/userAction';

let initialState = {
  isAuth: null,
  role: null
};

export default (state = initialState, action) => {
  let newState;
  
  if(action.type === USER_IS_AUTH) {
    newState = { ...state, isAuth: action.isAuth }
  }
  if(action.type === USER_ROLE) {
    newState = { ...state, role: action.role }
  }
  
  return newState || state;
}
