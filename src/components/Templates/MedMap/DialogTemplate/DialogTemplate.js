import React, {useCallback, useState} from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import useStyles from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTemplate = props => {
  const {
    name,
    content,
    openDialogs,
    setOpenDialogs,
    buttonName,
    setForRequest,
    forRequestName,
    forRequest
  } = props;

  const classes = useStyles();

  function handleClickOpen() {
    setOpenDialogs(openDialogs => ({
      ...openDialogs,
      [name]: true
    }))
  }

  function handleClose() {
    setOpenDialogs(openDialogs => ({
      ...openDialogs,
      [name]: false
    }))
  }

  const transformDate = useCallback(() => {
    return moment(new Date()).format("DD.MM.YYYY")
  }, []);


  const [ isEnd, setIsEnd ] = useState(false);
  const handleScroll = useCallback(event => {
    const coords = event.target.getBoundingClientRect();
    const allHeight = event.target.scrollHeight;
    const scrollTop = event.target.pageYOffset || event.target.scrollTop;
    const visibleHeight = event.target.clientHeight;

    if(scrollTop + visibleHeight === allHeight) {
      setIsEnd(true);
    } else {
      //
    }
  }, []);

  return (
    <div className={classes.politician} onScroll={handleScroll}>
      <a
        // variant="outlined"
        className={forRequest[forRequestName] ? classes.anything : classes.btnPolitician}
        onClick={handleClickOpen}>
        {buttonName}
      </a>
      <Dialog
        open={openDialogs[name]}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/*<div id="alert-dialog-title-description">{content}</div>*/}
        <DialogContent>
          <div id="alert-dialog-slide-description">
            {content}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={!isEnd}
            onClick={() => {
              setForRequest(forRequest => ({
                ...forRequest,
                [forRequestName]: transformDate()
              }));
              handleClose();
            }}
            color="primary">
            Принять
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default DialogTemplate;