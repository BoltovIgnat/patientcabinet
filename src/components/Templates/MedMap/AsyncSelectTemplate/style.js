import { makeStyles } from '@material-ui/styles'
import {BORDER, DIM_GRAY, GRAY} from "../variables";


export const useStyles = makeStyles({
  asyncInputTitle: {
    position: 'absolute',
    top: 18,
    left: 47,
    zIndex: 1,
    lineHeight: '20px',
  }
});

export const AsyncStyles = {
  control: (styles) => ({
    ...styles,
    border: BORDER,
    height: 56,
    borderRadius: 4,
    boxShadow: 'none',
    fontFamily: '"Roboto", Arial, sans-serif',
    '&:hover': {
      cursor: 'pointer',
      // border: BORDER,
      // boxShadow: 'none',
    },
  }),
  input: (styles) => ({
    ...styles,
    color: DIM_GRAY,
    fontSize: 14,
    fontFamily: '"Roboto", Arial, sans-serif',
    '&:focus': {
      color: 'red',
    }
  }),
  menuList: (styles) => ({
    ...styles,
    fontSize: 14,
    color: GRAY,
    fontFamily: '"Roboto", Arial, sans-serif',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: 16,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingRight: 15,
    overflow: 'hidden',
    // height: 20,
    width: '100%',
    fontFamily: '"Roboto", Arial, sans-serif',



  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    '& > div': {
      padding: '15px 5px',
    },
    '&:hover': {
      cursor: 'pointer',
    }
  })
};
