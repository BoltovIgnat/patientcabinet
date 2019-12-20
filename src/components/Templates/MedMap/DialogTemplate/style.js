import { makeStyles } from '@material-ui/styles'
import {grey} from "@material-ui/core/colors";
import {BLACK, BLUE, GRAY, WHITE} from "../variables";

const useStyles = makeStyles({
    root: {},
    politician: {
      '& a': {
          color: BLACK,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          '& span': {
              fontSize: 14,
              textTransform: 'none',
              textAlign: 'left',
              marginLeft: 16,
              paddingRight: 10,
              '& u': {
                  fontWeight: 'bold',
              }
          },
          '& div': {
              width: 18,
              height: 18,
              color: WHITE,
          },
      }
    },
    btnPolitician: {
        '& div': {
            backgroundColor: GRAY,
        }
    },
    anything: {
        '& div': {
            backgroundColor: BLUE,
        }
    }
});

export default useStyles;