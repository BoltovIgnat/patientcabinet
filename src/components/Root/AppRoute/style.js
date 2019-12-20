import { makeStyles } from '@material-ui/styles'

export const options = {
  offset: '10px',
  position: 'middle',
  timeout: 2000,
  type: 'info',
  transition: 'fade',
  // transition: transitions.SCALE,
  containerStyle: {
    zIndex: 100
  }
};

const useStyles = makeStyles({
  progress: {

    color: '#00695c',
    backgroundColor: 'black'
  }
});

export default useStyles;
