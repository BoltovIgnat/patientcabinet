import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  //userDataBox
  userDataBox: {
    maxWidth: 428,
    width: '100%',
    margin: '0 auto',
    padding: '38px 56px',
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
    marginBottom: 50,
    '& p': {
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: '24px',
      color: ' rgba(0, 0, 0, 0.54);',
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
