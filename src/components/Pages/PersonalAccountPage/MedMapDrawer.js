import React, {createContext, useEffect, useContext, useCallback, Suspense, createRef, useRef, useState} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from "axios";
import { useCookies } from 'react-cookie';

//Material-ui
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Toc from '@material-ui/icons/Toc';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import SvgIcon from "@material-ui/core/SvgIcon";


import pageLogo from '../../../assets/images/pageLogo.png';
import userLogo from '../../../assets/images/userLogo.png';

import { useStyles2 } from './style';
import {
  APPLICATIONS_PAGE_LINK,
  DOCUMENTS_PAGE_LINK,
  IT_SUPPORT_PAGE_LINK,
  MAIN_PAGE_LINK
} from "../../../config/pageLinks";

import DesktopPage from "./DesktopPage";
import ApplicationsPage from "./ApplicationsPage";
import DocumentsPage from "./DocumentsPage";
import ItSupportPage from "./ItSupportPage";
import StatisticsHealthPage from "./StatisticsHealthPage";
import { PersonalAccountContext } from './PersonalAccount.page';
import { SIGN_OUT, NODE_ENV } from "../../../config";
import { DESKTOP_PAGE_LINK, STATISTICS_PAGE_LINK } from "../../../config/pageLinks";

export const MedMapDrawerContext = createContext(null);

const MedMapDrawer = props => {
  const classes = useStyles2();
  const theme = useTheme();
  const {
    menuLinksUp,
    menuLinksDown
  } = props;

  const [cookies, setCookie, removeCookie] = useCookies();

  const personalContext = useContext(PersonalAccountContext);
  const {
    // cookies,
    isAuth,
    role,
    userIsAuth,
    userRole,
    // customClasses2,
    snackbarsOpen,
    history,
    personalAccountPageDesktopActiveTab: setActiveTab
  } = personalContext;

  const [open, setOpen] = React.useState(false);

  function handleDrawer() {
    setOpen(open => !open);
  }

  const [ isDisabled, setIsDisabled ] = useState(false);
  const signOut = useCallback(() => {
    setIsDisabled(isDisabled => true);

    const fetchData = async() => {
      try {
        const newData = new FormData();
        newData.append('token', cookies.token);
        const result = await axios({
          method: 'post',
          url: SIGN_OUT,
          data: newData
        });

        console.log(result, 'headerTemplate signOuth');

        await new Promise((resolve, reject) => {
          setIsDisabled(isDisabled => false);
          resolve()
        });

        const {
          data: {
            data: {
              roles,
              success,
              error,
              userId
            },
            status
          }
        } = result;

        console.log(result, 'result personal account');

        if(status === 200) {
          if(error) {
            NODE_ENV === 'development' ? userIsAuth(false) : userIsAuth(true);
            NODE_ENV === 'development' ? userRole(null) : false;
            NODE_ENV === 'development' ? removeCookie('token') : false;
            history.push(MAIN_PAGE_LINK);
          } else if(success) {
            removeCookie('token');
            userIsAuth(false);
            userRole(null);
            history.push(MAIN_PAGE_LINK);
            snackbarsOpen({ variant: 'success', message: success.successText });
          }
        } else {
          //
        }
      } catch (e) {
        setIsDisabled(isDisabled => false);
        console.error(e.message, 'fetchData headerTemplate')
      }
    };

    fetchData();
  }, [isAuth, role]);
  
  const [ activeNode, setActiveNode ] = useState(0);
  const defineIdentifier = useCallback(node => {
    if(history.location.pathname === STATISTICS_PAGE_LINK) {
      setActiveNode(1);
    } else if(history.location.pathname === DOCUMENTS_PAGE_LINK) {
      setActiveNode(2);
    } else if(history.location.pathname === APPLICATIONS_PAGE_LINK) {
      setActiveNode(3);
    } else if(history.location.pathname === IT_SUPPORT_PAGE_LINK) {
      setActiveNode(4);
    }
  }, []);
  // const [ activeTab, setAcitveTab ] = useState(0);

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={
            open ? `${classes.appBar} ${classes.appBarShift}` : classes.appBar
          }
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              // className={open ? `${classes.menuButton} ${classes.hide}` : classes.menuButton}
              className={classes.menuButton}
            >
              <Toc style={{ fontSize: 35 }}/>
            </IconButton>
            <div
              onClick={() => {
                setActiveTab(0);
                if(activeNode) {
                  setActiveNode(0);
                  history.push(DESKTOP_PAGE_LINK);
                }
              }}
              style={{
                cursor: 'pointer'
              }}
              className={classes.linkLogo}
            >
              <img src={pageLogo} alt="pageLogo" />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={
            open ? `${classes.drawer} ${classes.drawerOpen}` : `${classes.drawer} ${classes.drawerClose}`
          }
          classes={{
            paper: open ? classes.drawerOpen : classes.drawerClose
          }}
          open={open}
        >
          <Divider />
          <Box className={classes.userWrap}>
            <Box className={classes.userWrapLeft}>
              <Avatar src={userLogo} className={classes.userAvatar} alt="" />
            </Box>
            <Box className={classes.userWrapRight}>
              <Typography className={classes.userName}>Иннокентий  Смоктуновский</Typography>
              <Box className={classes.userCurrentInfo}>
                <Box className={classes.userCurrInfoEditor}></Box>
                <Box className={classes.userCurrInfoWrap}>
                  <Box className={classes.userCurrText} component="span">добавить статус</Box>
                </Box>
                <Box className={classes.userCurrInfoFake}></Box>
              </Box>
            </Box>
          </Box>
          <Divider />
          <List className={classes.list}>
            {menuLinksUp.map((item, index) => {
              const {
                id,
                nameLink,
                pathname,
                LinkIcon,
                classNameSvg
              } = item;
              return (
                <Link to={pathname} key={id}>
                  <ListItem
                    ref={defineIdentifier}
                    onClick={() => {
                      if(activeNode) {
                        setActiveTab(0);
                      }

                      setActiveNode(id);
                    }}
                    className={`${classes.listItem} ${activeNode === id ? classes.active : ''}`}
                    button
                  >
                    <div className={classes.listItemLink}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <SvgIcon className={classes[classNameSvg]}>
                          {
                            LinkIcon
                          }
                        </SvgIcon>
                      </ListItemIcon>
                      <ListItemText className={classes.listItemText} primary={nameLink} />
                    </div>
                  </ListItem>
                </Link>
              )
            })}
          </List>
          <Divider />
          <List className={classes.list}>
            {menuLinksDown.map((item, index) => {
              const { id, nameLink, LinkIcon, classNameSvg } = item;

              return (
                <ListItem className={classes.listItem} onClick={id === 1 && !isDisabled ? signOut : () => {}} button key={id}>
                  <div className={classes.listItemLink}>
                    <ListItemIcon className={classes.listItemIcon}>
                      <SvgIcon className={classes[classNameSvg]}>
                        {
                          LinkIcon
                        }
                      </SvgIcon>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={nameLink} />
                  </div>
                  <ListItemText className={classes.listItemText} primary={nameLink} />
                </ListItem>
              )
            })}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/*{*/}
          {/*  activeNode === 1 ? (*/}
          {/*    <StatisticsHealthPage />*/}
          {/*  ) : activeNode === 2 ? (*/}
          {/*    <DocumentsPage />*/}
          {/*  ) : activeNode === 3 ? (*/}
          {/*    <ApplicationsPage />*/}
          {/*  ) : activeNode === 4 ? (*/}
          {/*    <ItSupportPage />*/}
          {/*  ) : false*/}
          {/*}*/}
        </main>
      </div>
  );
};

export default MedMapDrawer;
