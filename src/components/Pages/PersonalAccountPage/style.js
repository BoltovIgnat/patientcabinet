import { makeStyles } from '@material-ui/styles';
import {
  GRAY,
  BLACK_LIGHT,
  GRAY_AVERAGE,
  BLUE,
  BLACK,
  GRAY_LIGHT_SLATE,
  GRAY_LIGHT_SLATE_LOGO, WHITE
} from "../../Templates/MedMap/variables";

const drawerWidth = 176;



// // CustomClasses 2
// export const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: WHITE,
//   },
// }));
// // END CustomClasses 2


// PersonalClasses
export const useStyles2 = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: WHITE,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none',
    borderBottom: '1px solid #C4C4C4',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  linkLogo: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
    color: GRAY_LIGHT_SLATE_LOGO,
  },
  // hide: {
  //   display: 'none',
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    '& $userWrapRight': {
      opacity: 0,
      transition: '0.2s',
    },
    '& $listItemText': {
      // paddingLeft: 23,
      opacity: 0,
      transition: '0.2s',
    },
    '& $listItem': {

    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
    userWrap: {
      display: 'flex',
      // marginTop: 43.33,
      marginTop: 107.33,
    },
      userWrapLeft: {
        marginLeft: 16,
      },
        userName: {
          fontSize: 12,
          lineHeight: '14px',
          fontWeight: 'bold',
          color: BLACK,
          whiteSpace: 'normal',
          marginTop: 8,
          marginBottom: 19,
        },
        userCurrentInfo: {
          marginBottom: 30,
        },
        userCurrText: {
          fontSize: 10,
          lineHeight: '12px',
          color: GRAY_LIGHT_SLATE,
          textDecoration: 'underline',
        },
      userWrapRight: {
        marginLeft: 14,
      },
    list: {
      padding: 0,
      marginTop: 24,
    },
      listItem: {
        padding: 0,
        '&$active': {
          backgroundColor: GRAY_AVERAGE,
          '& $listItemIcon': {
            '& svg': {
              color: BLUE,
            }
          },
          '& $listItemText': {
            '& span': {
              color: BLUE,
              fontWeight: 'bold',
            }
          }
        },
      },
      active: {},
        listItemLink: {
          display: 'flex',
          minHeight: 48,
          whiteSpace: 'normal',
          alignItems: 'center',
          width: '100%',
          textDecoration: 'none',
          paddingLeft: 25,
          cursor: 'pointer',
        },
          listItemIcon: {
            minWidth: 20,
            color: GRAY,
            '& $iconSvg, $outlinedSvg': {
              fontSize: 20,
              color: 'currentColor',
              fill: 'currentColor',
            }
          },
          iconSvg: {},
          outlinedSvg: {
            '& path, line': {
              stroke: 'currentColor',
              fill: 'white',
              strokeWidth: 2,
            }
          },
          listItemText:{
            paddingLeft: 16,
            opacity: 1,
            '& span': {
              fontSize: 12,
              width: 104,
              display: 'block',
              color: BLACK_LIGHT,
              lineHeight: '14px',
            }
          },

  content: {
    maxWidth: 954,
    margin: '0 auto',
  },
}));
// END PersonalClasses