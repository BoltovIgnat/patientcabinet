import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {BLACK, BLUE, BORDER_BLUE, DIM_GRAY, WHITE} from "../../../../../Templates/MedMap/variables";

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    marginTop: 69,
  },
  container: {
    maxWidth: 848,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    boxSizing: 'content-box',
    paddingLeft: 73,
  },
  wrapperColumn: {
    display: 'flex',
  },
  leftColumn: {
    width: 248,
    marginRight: 16,
  },
  rightColumn: {
    width: 512,
    height: 985,
    overflowY: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
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
    height: 182,
    flexDirection: 'column',//
    marginBottom: 15,
    '&:nth-child(2n)': {
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
    overflow: 'hidden',
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
    height: 30,
    overflow: 'hidden',
    '& span': {
      position: 'relative',
      maxHeight: 30,
      display: 'block',
      '&:after': {
        content: '"..."',
        position: 'absolute',
        backgroundColor: '#ffffff',
        right: 0,
        bottom: 0,
      }
    }
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

  //*_* ExpansionPanel
  filterClinic: {
    marginBottom: 19,
  },
  expansionPanel: {
    boxShadow: 'none',
  },
  heading: {
    fontSize: 16,
    color: BLACK,
  },
  //-_- ExpansionPanel


  // secondaryHeading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   color: theme.palette.text.secondary,
  // },
}));

export default useStyles;