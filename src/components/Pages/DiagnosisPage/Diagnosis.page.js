import React, {useCallback, useState, useEffect} from 'react';
import {MEDICAL_ORGS_OFFICIAL} from "../../../config";

import { AsyncSelectMedMap } from '../../Templates/MedMap';

const DiagnosisPage = props => {
  const { customClasses } = props;

  const [ asyncInputValue, setAsyncInputValue ] = useState(null);

  return (
    <div className={`${customClasses.root} ${customClasses.agada}`}>
      <h1 className={customClasses.agada}>DiagnosisPage</h1>
      <AsyncSelectMedMap
        asyncInputValue={asyncInputValue}
        setAsyncInputValue={setAsyncInputValue}
        url={`${MEDICAL_ORGS_OFFICIAL}&keySearch=clinics`}
      />
    </div>
  )
};

export default DiagnosisPage;
