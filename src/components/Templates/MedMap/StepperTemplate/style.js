import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 863,
    margin: '0 auto',
  },
  registrBlock: {
    maxWidth: 726,
    margin: '0 auto',
    textAlign: 'center',
    '& h2': {
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& h3': {
      color: 'rgba(0, 0, 0, 0.54)',
      marginBottom: 50,
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
});

export default useStyles;