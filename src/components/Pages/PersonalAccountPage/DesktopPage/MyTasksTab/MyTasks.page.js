import React, {Fragment, useState} from 'react';

import useStyles from './style';

import { SliderTemplate, AsyncSelectTemplate } from '../../../../Templates/MedMap';
import { ANYTHING_TEST } from '../../../../../config';
import Box from "@material-ui/core/Box";
import reactLogo from "../../../../../assets/images/react.png";

const MyTasksPage = props => {
  const classes = useStyles();
  const { customClasses } = props;

  const [ tasksTitleArr, setTasksTitleArr ] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ]);

  const [ taskContent, setTaskContent ] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ]);

  function MyTaskItemTitle() {
    return (
      <div className={classes.myTaskItem}>
        <div className={classes.myTaskItemImg}>
          <img src={reactLogo} alt="react"/>
        </div>
        <div className={classes.myTaskBoxTitle}>
          <div className={classes.myTaskItemHeading}>Анамнез жизни</div>
          <div className={classes.myTaskItemDescription}>лояльность к мед. организации</div>
        </div>
      </div>
    )
  }

  function MyTaskBoxInformation() {
    return (
      <div className={classes.myTaskItem}>
        <div className={classes.myTaskBoxTitle}>
          <div className={classes.myTaskItemHeading}>Анамнез жизни</div>
          <div className={classes.myTaskItemDescription}>лояльность к мед. организации</div>
        </div>
        <div className={classes.myTaskBoxInformation}>
          <div className={classes.myTaskItemHeading}>Место приёма:</div>
          <div className={classes.myTaskItemDescription}>Государственная клиническая больница №29 им. Н.Э.Баумана</div>
        </div>
        <div className={classes.myTaskItemSubTitle}></div>
      </div>
    )
  }

  return (
    <Fragment>
      <div className={customClasses.pageBlock}>
        <div className={classes.myTasks}>
          <div className={classes.myTaskContainer}>
            <div className={classes.myTaskList}>
              {
                tasksTitleArr.map((item, index) => {
                  const { id } = item;

                  return (
                    <MyTaskItemTitle key={id} />
                  )
                })
              }

              {
                taskContent.map((item, index) => {
                  const { id } = item;

                  return (
                    <MyTaskBoxInformation key={id} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  )
};

export default MyTasksPage;