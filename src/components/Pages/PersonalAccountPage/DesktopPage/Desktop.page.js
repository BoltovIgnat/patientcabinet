import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";

import useStyles from './style';
import { TabTemplate } from '../../../Templates/MedMap';
import DoctorsTab from './DoctorsTab';
import MyTasksTab from './MyTasksTab';
import HelperTab from './HelperTab';
import MapTab from './MapTab';

const DesktopPage = props => {
  const classes = useStyles();
  const {
    desktopActiveTab: value,
    personalAccountPageDesktopActiveTab: setValue,
    customClasses,
    history,
    path
  } = props;

  // const medMapDrawerContext = useContext(MedMapDrawerContext);
  // const {
  //   activeTab: value,
  //   setAcitveTab: setValue
  // } = medMapDrawerContext;

  // for request

  const tabOne = <MyTasksTab customClasses={customClasses} />;
  const tabTwo = <MapTab customClasses={customClasses} />;
  const tabThree = <DoctorsTab customClasses={customClasses} />;
  const tabFour = <HelperTab customClasses={customClasses} />;

  return (
    <TabTemplate
      value={value}
      setValue={setValue}
      titleArr={[
        { id: 0, tabLabel: 'Мои задачи' },
        { id: 1, tabLabel: 'Карта' },
        { id: 2, tabLabel: 'Врачи' },
        { id: 3, tabLabel: 'Помощник' },
      ]}
      contentArr={[
        { id: 0, tabContent: tabOne },
        { id: 1, tabContent: tabTwo },
        { id: 2, tabContent: tabThree },
        { id: 3, tabContent: tabFour },
      ]}
    />
  )
};

export default DesktopPage;