import { makeStyles } from '@material-ui/styles';

export const useStyles1 = makeStyles({
  success: {
    backgroundColor: '#0a1f31 !important',
  },
  error: {
    backgroundColor: '#c42d2d !important',
  },
  info: {
    backgroundColor: '#6e7e98 !important',
  },
  warning: {
    backgroundColor: '#f5f5f5 !important',
    '& $message': {
      color: '#404040',
    },
    '& svg': {
      color: '#6e7e98',
    }
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 10,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    fontSize: 14,
  },
});

export const useStyles2 = makeStyles({
  margin: {
    margin: 10,
  },
});


