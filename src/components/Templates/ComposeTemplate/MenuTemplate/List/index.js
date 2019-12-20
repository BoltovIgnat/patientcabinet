import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import List from './List';
import {userIsAuth, userRole} from "../../../../../model/actions/userAction";

const mapStateToProps = state => ({
  role: state.userReducer.role,
  isAuth: state.userReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  userIsAuth: isAuth => dispatch(userIsAuth(isAuth)),
  userRole: role => dispatch(userRole(role))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (List)
);
