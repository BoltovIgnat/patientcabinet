import { makeStyles } from '@material-ui/styles'

import { prefixer } from '../../../helpers/';
import {BLACK, root} from '../../Templates/MedMap/variables';

const useStyles = makeStyles({
  root:{

  },


  pageBlock: {
    position: 'relative',
    padding: '0 36px',
    // margin: '10px 0 10px 30px',
    margin: '10px 0 10px 0px',
  },
  pageBlockHeader: {
    fontSize: 22,
    fontWeight: 500,
    lineHeight: '24px',
    marginBottom: 28,
    color: BLACK,
  },


  main: {
    minHeight: 715,
  },
  container: {
    maxWidth: 1024,
    margin: '0 auto',
  },
  btn: {
    display: 'inline-block',
    fontWeight: 400,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    userSelect: 'none',
    border: '1px solid transparent',
    marginTop: 10,
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: 1.5,
    borderRadius: '.25rem',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  },
  headerTitle:{
    fontFamily: '"Lato", sans-serif',
    fontWeight: '800',
    fontSize: 42,
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    marginBottom: 100,
    color: '#4b515a',
    paddingRight: 20,
    paddingLeft: 20,
    '@media (max-width: 800px)':{
      marginBottom: 35,
      fontSize: 30,
    }
  },

  regBtn: {
    height: 44,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 14,
    borderRadius: 4,
    '& button': {
      width: '100%',
      maxWidth: 316,
      '&:hover': {
        opacity: 0.8,
      }
    },
    boxSizing: 'border-box',
  },
  btnBlue: {
    '& button': {
      backgroundColor: '#2196F3',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#2196F3',
      }
    }
  },
  btnWhite: {
    '& button': {
      backgroundColor: '#ffffff',
      color: '#2196F3',
      border: '1px solid #2196F3',
      '&:hover': {
        backgroundColor: '#ffffff',
      }
    }
  },


  //userDataBox
  userDataBox: {
    maxWidth: 428,
    width: '100%',
    margin: '0 auto',
    padding: '20px 56px',
    boxSizing: 'border-box',
  },
  userDataBoxIcon: {
    textAlign: 'center',
    color: '#7FC545',
    marginBottom: 50,
    '& svg': {
      fontSize: 106,
    }
  },
  userDataBoxHeader: {
    textAlign: 'center',
    marginBottom: 34,
    '& p': {
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: '24px',
      color: ' rgba(0, 0, 0, 0.54);',
    }
  },


  helperTextTop: {
    textAlign: 'center',
    maxWidth: 220,
    margin: '0 auto',
    '& p': {
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: '14px',
      color: ' rgba(0, 0, 0, 0.54);',
      marginBottom: 10,
    }
  },
   helperTextBottom: {
    textAlign: 'center',
    maxWidth: 220,
    margin: '0 auto',
    marginTop: -30,
    '& p': {
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: '14px',
      color: ' rgba(0, 0, 0, 0.54);',
      marginBottom: 10,
    }
  },

  userDataBoxInput: {
    marginBottom: 32,
    '& p': {
      position: 'absolute',
      bottom: -20,
    }
  },
  //end userDataBox


  //*_* Text Field
  fixTextField: {
    '& $textFieldBlock': {
      maxWidth: 316,
      margin: '0 auto',
      padding: '0 5px',
    }
  },
  textFieldBlock: {
    display: 'flex',
    alignItems: 'center',
    height: 66,
  }
  //-_- Text Field


});

export default useStyles;