import React from 'react';
import {Link} from "react-router-dom";
import {MAIN_PAGE_LINK} from "../../../config/pageLinks";

const NotFoundPage = props => {
  return (
    <div>
      {/*<h3><Link to={MAIN_PAGE_LINK}>Главная</Link></h3>*/}
      <h1>Not found page</h1>
    </div>
  )
};

export default NotFoundPage;
