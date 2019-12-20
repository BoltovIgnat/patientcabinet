import React from 'react';
import {Link} from "react-router-dom";
import {MAIN_PAGE_LINK} from "../../../config/pageLinks";

import { consentToTheProcessingOfPersonalData } from '../../../config/pageText';

const PersonalDataPage = props => {
  return (
    <div>
      {/*<h1>PersonalDataPage</h1>*/}
      <div>{consentToTheProcessingOfPersonalData}</div>
    </div>
  )
};

export default PersonalDataPage;
