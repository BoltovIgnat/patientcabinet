import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const TabTemplate = props => {
  const { contentArr, titleArr, style, value, setValue, history } = props;
  const classes = useStyles();
  const theme = useTheme();
  // const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    history.push(`${history.location.pathname}#tab=${newValue + 1}`)
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  let classesInternal;
  if(style) {
    const useStyles2 = makeStyles(theme => ({
      ...style
    }));

    classesInternal = useStyles2();
  }

  useEffect(() => {
    history.push(`${history.location.pathname}#tab=${value + 1}`)
  }, [])

  return (
    <div className={classesInternal ? classesInternal.tabsWrapper : classes.tabsWrapper}>
      <AppBar className={classesInternal ? classesInternal.tabContainer : classes.tabContainer} position="static" color="default">
        <Tabs
          // className={classes.tabList}
          classes={{
            root: classesInternal ? classesInternal.tabList : classes.tabList,
            indicator: classesInternal ? classesInternal.indicator : classes.indicator,
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          // textColor="primary"
          aria-label="full width tabs example"
          centered
        >

          {
            titleArr.map((item ,index) => {
              const { id, tabLabel } = item;

              return (
                <Tab
                  classes={{
                    root: classesInternal ? classesInternal.tabItem : classes.tabItem,
                    selected: classesInternal ? classesInternal.selected : classes.selected,
                  }}
                  label={tabLabel}
                  {...a11yProps(id)}
                  key={id} />
              )
            })
          }

        </Tabs>
      </AppBar>
      {/*i think remove that library*/}
      <SwipeableViews
        className={classesInternal ? classesInternal.tabContent : classes.tabContent}
        // slideClassName={} класс для самого слайда
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        {
          contentArr.map((item, index) => {
            const { id, tabContent } = item;

            return (
              <TabPanel
                value={value}
                index={id}
                dir={theme.direction}
                key={id}
              >
                {tabContent}
              </TabPanel>
            )
          })
        }

      </SwipeableViews>
    </div>
  )
};

// TabTemplate.defaultProps = {
//   value: 0,
//   setValue: () => {}
// };

export default TabTemplate;
