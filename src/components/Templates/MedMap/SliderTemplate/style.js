import { makeStyles } from '@material-ui/styles';
import {BLACK, BLUE, BORDER_BLUE, DIM_GRAY, WHITE} from "../variables";

//*_* начало
//-_- конец

const useStyles = makeStyles(theme => ({
  root: {},

  sliderPageWrapper: {

  },

  // *_* sliderScroll
  sliderScroll: {
    // padding: '0px 12px',
    position: 'relative',
    marginBottom: 14,
  },
  sliderList: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  sliderListA: {
    overflowY: 'auto',
    marginBottom: -100,
    paddingBottom: 100,
  },
  sliderListB: {
    whiteSpace: 'nowrap',
    display: 'flex',//
    // ...theme.mainObject
  },
  sliderItem: {
    // color: theme.mainObject.color,
    width: '31.96%',
    border: '1px solid #A3A3A3',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: '18px 13px',
    // display: 'inline-block',
    marginRight: 16,
    whiteSpace: 'normal',
    display: 'flex',//
    minWidth: 248,//
    maxWidth: 248,//
    flexDirection: 'column',//
    '&:last-child': {
      marginRight: 0,
    }
  },

    //*_* sliderItemHeader
  sliderItemHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 50,
    marginBottom: 8,
  },
  slideImageClinics: {
    display: 'flex',
    maxWidth: 90,
    maxHeight: 50,
    overflow: 'hidden',
  },
  slideImageDoctors: {
    display: 'flex',
    maxWidth: 90,
    maxHeight: 90,
    overflow: 'hidden',
    borderRadius: '50%',
  },
  sliderItemAvatar: {
    width: '100%',
    display: 'block',
  },
  sliderItemHeaderBtn: {
    display: 'flex',
    flexDirection: 'column',
    '& button': {
      width: 105,
      height: 38,
      backgroundColor: BLUE,
      borderRadius: 4,
      color: WHITE,
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 500,
      fontFamily: 'inherit',
      marginBottom: 7,
      border: BORDER_BLUE,
      boxSizing: 'border-box',
      '&:nth-child(2)': {
        marginBottom: 0,
        backgroundColor: WHITE,
        color: BLUE,
      },
    }
  },
    //-_- sliderItemHeader

  //*_* sliderItemBody
  sliderItemBody: {
    color: DIM_GRAY,
  },
  sliderItemTitle: {
    fontSize: 13,
    lineHeight: '15px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginBottom: 3,
    color: 'currentColor',
  },
  sliderItemLocation: {
    fontSize: 13,
    lineHeight: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginBottom: 8,
    color: 'currentColor',
  },
  sliderItemNumber: {
    fontSize: 13,
    lineHeight: '15px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: BLACK,
  },
    //-_- sliderItemBody

    //*_* sliderStepper
  sliderStepper: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '& button': {
      width: 23,
      height: 45,
      minWidth: 23,
      padding: 0,
    }
  },
  sliderStepperLeft: {
    left: -36,
  },
  sliderStepperRight: {
    right: -36,
  },
    //-_- sliderStepper

    //*_* sliderLink
  sliderBtnLink: {
    width: "100%",
    height: 36,
  },
  sliderLink: {
    width: "100%",
    height: '100%',
    border: BORDER_BLUE,
    backgroundColor: WHITE,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: BLUE,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: 0.15,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none',
    }
  }

    //-_- sliderLink

  //-_- sliderScroll


}));

export default useStyles;