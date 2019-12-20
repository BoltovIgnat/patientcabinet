import { makeStyles } from '@material-ui/styles'

import { prefixer } from '../../../helpers/';
import {root, WHITE} from '../../Templates/MedMap/variables';
import logoBg from "../../../assets/images/logoBg.png";

const useStyles = makeStyles({
  root: {
    color: '#212529',
    lineHeight: 1.5,
    '@media (max-width: 800px)':{
      '& $main__heading': {
        fontSize: 40,
        transition: '1s',
      },
      '& $switch': {
        padding: '2em',
        fontSize: 18,
      }
    },
    '@media (max-width: 600px)':{
      '& $main__heading': {
        fontSize: 30,
      },
      '& $medcare__check': {
        '& $header': {
          fontSize: 30,
          margin: '0.3em auto 0.60em;'
        },
      },
    },
    '@media (min-width: 1280px)':{
      '& $getPlan': {
        paddingTop: 90,
        '&:before,&:after': {
          minHeight: '100%',
        }
      }
    },
    '@media (min-width: 1920px)':{
      '& $getPlan': {
        paddingTop: 180,
      }
    }
  },

  med__help: {
    '& $container':{
      backgroundImage: `url(${logoBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '98% 1%',
      backgroundSize: '40%',
    },
    position: 'relative',
    background: 'linear-gradient(to right, rgba(2,52,95,1) 0%,rgba(116,163,214,1) 100%)',
    paddingBottom: '20em',
  },

  container: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: '0 15px',
  },
  main__heading: {
    fontFamily: '"Lato", sans-serif',
    color: WHITE,
    fontSize: 60,
    fontWeight: 'bold',
    maxWidth: 970,
    lineHeight: 1.1,
    letterSpacing: 1,
    textAlign: 'center',
    margin: 0,
    paddingTop: 50,
    transition: '1s',
    paddingRight: 20,
    paddingLeft: 20,
  },
  medcare__check: {
    maxWidth: 840,
    marginTop: '4em',
    position: 'relative',
    borderRadius: 15,
    zIndex: 2,
    boxShadow: '0 10px 15px 0 rgba(13,29,93,0.25), 0 15px 0 0 #d7d9dc, 0 25px 15px 0px rgba(13,29,93,0.25)',
    backgroundColor: 'white',
    margin: '0 auto',
    padding: '1rem 2rem',
    border: '10px solid #e7eaed',
    boxSizing: 'border-box',
    '& $header': {
      fontFamily: '"Lato", sans-serif',
      color: '#4b515a',
      fontSize: 42,
      margin: '0.3em auto 0.25em',
      textAlign: 'center'
    },
    '& $list': {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      '& $item': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '33.3%',
        minWidth: 230,
        marginBottom: 15,
        '& img': {
          display: 'block'
        },
        '& a': {
          width: '70%',
          border: '3px solid #00315c',
          borderRadius: 7,
          fontFamily: '"Lato", sans-serif',
          fontWeight: 600,
          fontSize: 14,
          textTransform: 'uppercase',
          color: '#00315c',
          backgroundColor: 'white',
          textDecoration: 'none',
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }
      }
    }
  },
  header:{},
  list:{},
  item:{},

  getPlanWrapper: {
    position: 'relative',
  },

  getPlan: {
    paddingTop: 20,
    // paddingBottom: '5em',
    position: 'relative',
    marginTop: -250,
    marginBottom: 200,
    '&:before':{
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '-16%',
      width: '50.1%',
      minHeight: '115%',
      backgroundColor: '#f0f2f5',
      transform: 'skewY(28deg)',
      zIndex: 0,
    },
    '&:after':{
      content: '""',
      display: 'block',
      position: 'absolute',
      right: 0,
      top: '-16%',
      width: '50.1%',
      minHeight: '115%',
      backgroundColor: '#f0f2f5',
      transform: 'skewY(-28deg)',
      zIndex: 0,
    },
  },

  radioGroup: {
    maxWidth: 850,
    marginTop: '3.6em',
    display: 'flex',
    margin: '0 auto',
    padding: '0 20px'
  },
  radioInput: {
    display: 'none'
  },
  planSubTitle: {
    fontFamily: '"Lato", sans-serif',
    fontSize: 24,
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    margin: '1.5rem',
  },
  switch: {
    width: '50%',
    padding: '2em',
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#ffffff',
    color: '#d3d3d3',
    fontSize: 24,
    '&$active': {
      backgroundColor:' #00315c',
      color: '#ffffff',
    }
  },
  active:{},
  visit: {
    maxWidth: 850,
    margin: '0 auto',
    zIndex: 2,
  },
  visitChoice: {
    width: '100%',
    zIndex: 1,
  },
  visitDoctor: {},
  visitMedMap: {},
  visitList: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  visitItem: {
    width: '50%',
    display: 'flex',
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',
    maxWidth: '100%',
    minWidth: 320,
    marginBottom: 40,
    '& img': {
      display: 'block',
      marginBottom: '2em',
    },
    '& button' : {
      width: '70%',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      backgroundColor: '#00315c',
      color: '#ffffff',
      fontFamily: '"Lato", sans-serif',
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      position: 'relative',
      zIndex: 2,
      outline: 'none',
      boxShadow:' rgba(0, 49, 92, 0.4) 0px 20px 60px, rgba(0, 38, 102, 0.4) 0px 5px 20px',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: 'calc(100% + 40px)',
        height: 'calc(100% + 40px)',
        left: -20,
        top: -20,
        zIndex: -1,
        border: '1px solid #d1dfee',
        borderRadius: 5,
        pointerEvents: 'none',
      },
      '&:hover': {
        transform: 'scale(1.05)',
      },
      '&:focus': {
        outline: 0,
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      }
    },
  },

  radioDoctor: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  radioBg: {},
  radioMedMap: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  radioLabel: {
    fontFamily: '"Lato", sans-serif',
    fontSize: 'inherit',
    textAlign: 'center',
    zIndex: 1,
    userSelect: 'none',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    cursor: 'pointer',
    padding: '0 10px',
    boxSizing: 'border-box',
  },

  info: {
    // paddingTop: '6em',
  },

  infoList: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 920,
    margin: '0 auto',
    padding: 0,
    justifyContent: 'center',

  },
  infoItem: {
    width: '50%',
    padding: '0 1em 4em',
    boxSizing: 'border-box',
    '@media (max-width: 814px)': {
      width: '100%',
      maxWidth: 500,
      '& span':{
        textAlign: 'center',
      }
    },
    '& span': {
      fontFamily: '"Lato", sans-serif',
      fontSize: 72,
      fontWeight: 800,
      color: '#deeaf7',
      margin: 0,
      lineHeight: 1,
      display: 'block',
    },
    '& p': {
      fontFamily: '"Lato", sans-serif',
      fontSize: 20,
      fontWeight: 800,
      margin: 0,
    },
    '& ul': {
      listStyle: 'disc',
      fontFamily: '"Lato", sans-serif',
      fontSize: 16,
      margin: 0,
      padding: 0,
      paddingLeft: '1em',
    }
  }


});

export default useStyles;

