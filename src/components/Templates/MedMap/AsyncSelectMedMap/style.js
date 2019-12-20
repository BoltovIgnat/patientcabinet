import { makeStyles } from '@material-ui/styles'
import {BLACK, BLACK_LIGHT, BLUE, BORDER, GRAY, WHITE} from "../variables";

const useStyles = makeStyles({
  root: {},
  async: {
    width: '100%',
    height: 48,
    boxSizing: 'border-box',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
  },
  asyncInput: {
    width: '100%',
    height: 48,
    paddingRight: 40,
    boxSizing: 'inherit',
    backgroundColor: WHITE,
    color: BLACK_LIGHT,
    outline: 'none',
    border: BORDER,
    borderRadius: 4,
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,
    padding: '18.5px 14px',
    display: 'block',
    transitionDelay: '0.1s',
    textOverflow: 'ellipsis',
    '&:hover': {
      border: '1px solid'+ BLACK,
    },
    '&:focus': {
      border: '1px solid' + BLUE,
    }
  },
  asyncIconSearch: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: 'translateY(-50%)',
    color: GRAY,
  }
});

export default useStyles;

/*
'&:hover': {
  '& $asyncInput': {
    border: '2px solid red',
  }
}*/
