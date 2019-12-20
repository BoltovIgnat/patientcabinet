import React from 'react';
import { connect } from 'react-redux';
import {withCookies} from "react-cookie";

import {appTitleChange, snackbarsOpen} from '../../../model/actions/appAction';
import {userIsAuth, userRole} from '../../../model/actions/userAction';
import {saveToken} from '../../../model/actions/dataAction';

import SignInPage from './SignIn.page';


const mapStateToProps = state => ({
  title: state.appReducer.title,
  role: state.userReducer.role,
  token: state.dataReducer.token,
  openSnackbar: state.appReducer.openSnackbar,
});

const mapDispatchToProps = dispatch => ({
  appTitleChange: title => dispatch(appTitleChange(title)),
  userRole: role => dispatch(userRole(role)),
  userIsAuth: isAuth => dispatch(userIsAuth(isAuth)),
  saveToken: token => dispatch(saveToken(token)),
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage)



// 1. Уточнить ссылки на странички
// 2. Исследовать рендер. Почему вызывается много раз
// 3. Нужен рабочий сервер для стабильной разработки
// 4. Проверить состояния role и isAuth для запросов
// 5. Протестить render props
// 6.