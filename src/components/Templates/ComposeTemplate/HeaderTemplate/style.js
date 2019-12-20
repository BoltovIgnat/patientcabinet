import { makeStyles } from '@material-ui/styles'

import { prefixer } from '../../../../helpers';
import entry from "../../../../assets/images/entry.png";
import logoSmall from "../../../../assets/images/logoSmall.png";
import logo from "../../../../assets/images/logo.png";

const useStyles = makeStyles({
  root:{
    background: `linear-gradient(to right, rgba(2,52,95,1) 0%,rgba(116,163,214,1) 100%)`,
    '& header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 60px',
      '@media (max-width: 600px)':{
        padding: '25px 20px',
      }
    }
  },
  container: {
    maxWidth: 1025,
    margin: '0 auto',
  },
  logo: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    width: 303,
    height: 44,
    transition: '1s',
    '@media (max-width: 600px)':{
      backgroundImage: `url(${logoSmall})`,
      width: 132,
      height: 44,
      transition: '1s',
    },
  },
  userLogin: {

    color: '#ffffff',
    fontFamily: '"Lato", sans-serif',
    textTransform: 'uppercase',
    fontSize: 14,
    textDecoration: 'none',
    lineHeight: 2,
    '&:after': {
      content: '""',
      backgroundImage: `url(${entry})`,
      height: 27,
      width: 27,
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: 20,
    }
  }

});

export default useStyles;