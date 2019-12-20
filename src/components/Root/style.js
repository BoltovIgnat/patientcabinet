import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from "@material-ui/core/colors/green";
import brown from "@material-ui/core/colors/brown";
import orange from "@material-ui/core/colors/orange";
import red from '@material-ui/core/colors/red';
import {BLACK, BLUE, BORDER} from "../Templates/MedMap/variables";
import {blue} from "@material-ui/core/colors";


const theme = createMuiTheme({

  palette: {

    // customColors: {
    //   darkRed: 'red',
    //
    // },
    secondary: brown,
    background: {
      default: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 14,
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  // mainObject: {
  //   fontSize: 27,
  //   color: 'green',
  //   textDecoration: 'none',
  //   lineHeight: 1,
  //   '&:hover': {
  //     textDecoration: 'none',
  //   }
  // },
  overrides: {
    MuiInputBase: {
      root: {
        width: '100%',
        position: 'relative',
      },
      input: {
        height: 48,
        boxSizing: 'border-box',
      }
    },

    MuiFormLabel: {
      root: {
        color: '#a3a3a3',
      }
    },

    MuiTextField: {
      root: {
        width: '100%',
      }
    },

    MuiInputLabel: {
      shrink: {
        backgroundColor: '#ffffff',
      }
    },
    MuiTypography: {
      h2: {
        fontSize: 22,
        lineHeight: '24px',
      },
      h3: {
        fontSize: 16,
        lineHeight: '24px',
      }
    },
    MuiStepIcon: {
      root: {
        '&$active': {
          color: '#2196F3',
        }
      }
    },
    MuiFormHelperText: {
      contained: {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 13,
          lineHeight: '14px',
      }
    },
    MuiDrawer: {
      paperAnchorLeft: {
        boxShadow: '0px 5.5px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18)',
      }
    },

    MuiBox:{
      root: {
        padding: 0
      }
    },
    MuiCheckbox: {
      colorPrimary:{
        '&$checked': {
          color: blue[500],
        }
      }
    },

    MuiExpansionPanel: {
      root: {
        '&:last-child': {
          borderBottom: BORDER,
        },
        '&$expanded + $root:before': {
          display: 'block!important'
        },
        '&$expanded': {
          margin: 0,
          '&:before': {
            opacity: 1,
          }
        }
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0,
        '&$expanded': {
          minHeight: "auto"
        },
      },
      content: {
        '&$expanded': {
          margin: '12px 0',
        },
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: '8px 24px 9px 4px'
      }
    }
  }
});

export default theme;