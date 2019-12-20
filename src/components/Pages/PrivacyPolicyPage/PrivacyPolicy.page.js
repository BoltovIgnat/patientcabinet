import React from 'react';
import {Link} from "react-router-dom";
import {MAIN_PAGE_LINK} from "../../../config/pageLinks";

import { userAgreement } from '../../../config/pageText';

const PrivacyPolicyPage = props => {
  return (
    <div>
      {/*<h3><Link to={MAIN_PAGE_LINK}>Главная</Link></h3>*/}
      {/*<h1>PrivacyPolicyPage</h1>*/}
      <div>
        {userAgreement}
      </div>
    </div>
  )
};

export default PrivacyPolicyPage;
