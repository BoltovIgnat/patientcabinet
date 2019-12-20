import { makeStyles } from '@material-ui/styles';
import {BLUE, WHITE} from "../../Templates/MedMap/variables";

export const useStyles = makeStyles({
  root:{
    paddingTop: 0,
  },
  main: {
    paddingTop: 0,
  },
  linkBtn: {
    display: 'block',
    width: '100%',
    lineHeight: 2,
    textDecoration: 'none',
    '&:active': {
      color: '#2196F3',
    }
  },
  userDataBoxWrapper: {

  },
  userDataBoxImage:{
    display: 'inline-block',
    margin: '0 auto',
  },
  userDataLogo: {
    width: 112,
    height: 34,
  }
});

export const style = {
  tabsWrapper: {
    paddingTop: 0,
  },
  tabContainer: {
    width: '100%',
    maxWidth: 365,
    margin: '0 auto',
    backgroundColor: WHITE,
    boxShadow: '0px 7px 4px -6px rgba(0,0,0,0.2)',
  },
  tabList: {
    '& $indicator': {
      backgroundColor: BLUE,
    }
  },
  indicator: {},

  tabItem: {
    color: 'black',
    width: '50%',
    padding: 0,
    '&$selected': {
      color: 'black',
    },
    '&:hover': {
      opacity: 1,
    }
  },
  selected: {},

  tabContent: {
    // width: 784,
  },
};

