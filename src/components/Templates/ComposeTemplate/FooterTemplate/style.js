import { makeStyles } from '@material-ui/styles'

import { prefixer } from '../../../../helpers';

const useStyles = makeStyles({
  root:{
    backgroundColor: '#0a1f31',
  },
  container: {
    maxWidth: 1024,
    margin: '0 auto',
    borderTop: '1px solid #6b6b6b',
    '& p': {
      textAlign: 'center',
      fontFamily: '"Lato", sans-serif',
      color: '#ffffff',
      opacity: 0.4,
      fontSize: 16,
      padding: '2.6em 0',
      margin: 0,
    }
  },
});

export default useStyles;