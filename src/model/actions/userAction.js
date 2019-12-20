export const USER_IS_AUTH = 'USER_TOKEN';

export const userIsAuth = isAuth => ({
  type: USER_IS_AUTH,
  isAuth
});

export const USER_ROLE = 'USER_ROLE';

export const userRole = role => ({
  type: USER_ROLE,
  role
});

