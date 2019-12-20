import { makeStyles } from '@material-ui/styles';
import {
  BLACK,
  BLACK_LIGHT,
  BLUE,
  GRAY,
  GRAY_AVERAGE,
  GRAY_LIGHT_SLATE,
  GRAY_LIGHT_SLATE_LOGO,
  WHITE
} from "../variables";

const drawerWidth = 176;

const useStyles = makeStyles(theme => ({
  root: {
  },


  //TABS
  tabsWrapper: {
    width: '100%',
    // paddingTop: 64,
    paddingTop: 108,
  },
  tabContainer: {
    position: 'fixed',
    width: '100%',
    left: 0,
    top: 64,
    paddingLeft: 73,
    backgroundColor: WHITE,
  },
  tabList: {
    '& $indicator': {
      backgroundColor: BLUE,
    }
  },
  indicator: {},

  tabItem: {
    color: GRAY,
    '&$selected': {
      color: BLUE,
    },
    '&:hover': {
      opacity: 1,
    }
  },
  selected: {},

  tabContent: {
    position: 'relative',
    margin: '0 auto',
    width: 1114,
    paddingLeft: 73,
    boxSizing: 'content-box',
    '@media (max-width: 1199px)':{
      maxWidth: 848,
    },
    '@media (min-width: 1950px)':{
      width: 1377,
    },
    // '@media (max-width: 1199px)':{
    //   width: 1200,
    // }
  },
  //END TABS
}));

export default useStyles;