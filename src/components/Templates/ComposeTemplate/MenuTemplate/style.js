import { makeStyles } from '@material-ui/styles'

import { prefixer } from '../../../../helpers';
import {WHITE} from "../../MedMap/variables";

const useStyles = makeStyles({
  root:{
    backgroundColor: '#0a1f31'
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
    paddingBottom: 20,
  },
  footerList: {
    paddingTop: '4em',
    display: 'flex',

    '@media (max-width: 814px)': {
      flexWrap: 'wrap',
      padding: '0 10px',
    }
  },
  footerItem: {
    paddingLeft: '2.6em',
    color: '#ffffff',
    fontFamily: '"Lato", sans-serif',
    fontSize: 14,
    opacity: 0.8,
    minWidth: 100,
    '& img': {
      width: 132,
      height: 41,
      display: 'block',
      marginTop: '0.6em',
    },
    '@media (max-width: 814px)': {
      width: '100%',
      textAlign: 'center',
      padding: 0,
      '& img': {
        display: 'inline-block',
      },
    },
    // '&:last-child': {
    //   paddingLeft: 0,
    // },
    '& span': {
      fontWeight: 'bold',
      opacity: 1,
    },
    '& a': {
      color : '#ffffff',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '1em',
      fontFamily: '"Lato", sans-serif',
      fontSize: 14,
      opacity: 0.8,
      fontWeight: 300,
    },

  },
  footerHeader: {
    fontFamily: '"Lato", sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5em',
  },
  footerInfo: {
    paddingLeft: '2.6em',
    marginBottom: 50,
    '& p': {
      fontFamily: '"Lato", sans-serif',
      color: '#ffffff',
      opacity: 0.4,
      fontSize: 14,
    },
    '@media (max-width: 814px)': {
      maxWidth: 500,
      margin: '0 auto',
    }
  }
});

export default useStyles;