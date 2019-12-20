import React, { useState, useEffect, useMemo } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { MAIN_PAGE_LINK } from '../../../../../config/pageLinks';
import Role from '../../../../../config/roles';
import useStyles from "./style";

const List = props => {
  const {
    path,
    name,
    component,
    permission,
    text,
    role,
    isAuth,
    history
  } = props;
  const classes = useStyles();
  const [ stateRole, setStateRole ] = useState(() => Role(role || 'layout')(permission));

  // useEffect(() => {
  //   if(!stateRole) {
  //     history.push(MAIN_PAGE_LINK)
  //   }
  // }, [role, isAuth]);

  return Role(role || 'layout')(permission) ? (
    <div>
      <Link to={path}>{text}</Link>
    </div>
  ) : ''
};

export default List;
