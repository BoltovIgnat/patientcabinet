import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root:{},
  form: {
    maxWidth: 725,
    margin: '0 auto',
    padding: '0 auto',
  },
  container: {
    maxWidth: 863,
    width: '100%',
    margin: '0 auto'
  },
  textField: {
    width: '100%',
    // maxWidth: 316,
    margin: 0,
  },
  registrBlock: {
    maxWidth: 609,
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
  registrContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registrColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
    maxWidth: 316,
    margin: '0 28px',
    '@media (max-width: 744px)': {
      width: '100%',
      '&:nth-last-child(1)': {
        order: 4,
      },
      '&:nth-last-child(2)': {
        order: 3,
      },
      '&:nth-last-child(3)': {
        order: 1,
      },
      '&:nth-last-child(4)': {
        order: 2,
      }
    }
  },
  registrItem: {
    height: 56,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 32,
    color: '#a3a3a3',
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
  registrCode: {
    marginBottom: 140,
  },

});

export default useStyles;
