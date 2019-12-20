import {makeStyles} from "@material-ui/styles";
import {BLUE, GRAY, WHITE} from "../../../../Templates/MedMap/variables";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: 64,
  },
  //MY TASK
  myTasks: {

  },
  myTaskContainer: {
    padding: '5px 0',
  },
  myTaskList: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  myTaskItem: {
    width: 'calc(20% - 7px)',
    minHeight: 208,
    margin: '0 3.5px',
    borderRadius: 4,
    boxShadow: '0px 5px 10px rgba(41, 95, 176, 0.25)',
    color: '#828FA6',
    paddingTop: 25,
    // paddingBottom: 16,
    boxSizing: 'border-box',
    marginBottom: 32,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      // transform: 'scale(1.05)',
      boxShadow: '0 5px 20px 0 rgba(41, 95, 176, 0.25)',
    }
  },
  myTaskItemImg: {
    height: 95,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    '& img': {
      maxWidth: 95,
      maxHeight: 95,
    }
  },
  myTaskBoxTitle: {
    minHeight: 60,
    textAlign: 'center',
    marginBottom: 16,
  },
  myTaskItemHeading: {
    color: 'inherit',
    fontSize: 16,
    // lineHeight: '16px',
  },
  myTaskItemDescription: {
    fontSize: 12,
    color: 'inherit',
    lineHeight: '15px',
  },
  myTaskBoxInformation: {
    paddingLeft: 16,
    textAlign: 'left',
    marginBottom: 16,
    '& $myTaskItemHeading': {
      fontSize: 12,
      fontWeight: 'bold',
    },
    '& $myTaskItemDescription': {
      fontSize: 13,
    }
  },

  //END MY TASK
}));

export default useStyles;