import React, { useEffect, useState, createRef } from 'react';
import LazyLoad from 'react-lazy-load';
import axios from 'axios';
// import LazyLoad from 'react-lazyload';

import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './style';
import {MEDICAL_ORGS_OFFICIAL} from "../../../../../../config";
import {AsyncSelectMedMap} from "../../../../../Templates/MedMap";

const ClinicsPage = props => {
  const {
    sliderData,
    doctorsTabSliderData,
    sliderUrl,
    countShowImg,
    doctorsTabCountShowImg,
    customClasses,

    dictionaryName,
    asyncInputValue,
    doctorsTabAsyncInputValue,
    additionCountShowImg,
    doctorsTabAdditionCountShowImg,

  } = props;

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filter = (
    <div>
      <div className={classes.filterClinic}>
        <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Специальность</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox color={"primary"} />
                  }
                  label="Невролог"
                />
                <FormControlLabel
                  control={
                    <Checkbox color={"primary"} />
                  }
                  label="Паразит"
                />
                <FormControlLabel
                  control={
                    <Checkbox color={"primary"} />
                  }
                  label="Хирург"
                />
                <FormControlLabel
                  control={
                    <Checkbox color={"primary"} />
                  }
                  label="Лор"
                />
                <FormControlLabel
                  control={
                    <Checkbox color={"primary"} />
                  }
                  label="Дермат"
                />
              </FormGroup>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Медицинские услуги</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Невролог"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Паразит"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Хирург"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Лор"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Дермат"
              />
            </FormGroup>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Оплата</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Невролог"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Паразит"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Хирург"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Лор"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Дермат"
              />
            </FormGroup>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansionPanel} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Заболевание</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Невролог"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Паразит"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Хирург"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Лор"
              />
              <FormControlLabel
                control={
                  <Checkbox color={"primary"} />
                }
                label="Дермат"
              />
            </FormGroup>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div>
        <button style={{ width: 70, height: 50 }}>Сброс</button>
        <button style={{ width: 70, height: 50 }}>Показать</button>
      </div>
    </div>
  );

  // ========================
  const scroll = sliderData && sliderData.clinics ?
    sliderData.clinics.map((item, index) => {
      const {
        id,
        location: {
          region,
          street,
          home
        },
        full_address,
        full_name,
        have_chat,
        phone_number,
        address,
        imgPath,
        type,
        label
      } = item;

      return (
        <div key={index} className={classes.sliderItem}>
          <div className={classes.sliderItemHeader}>
            <LazyLoad height={50} offsetVertical={100}>
              <img
                width={100}
                height={100}
                className={classes.sliderItemAvatar}
                src={imgPath}
                alt={label}
              />
            </LazyLoad>
            <div className={classes.sliderItemHeaderBtn}>
              <button>Записаться</button>
              { have_chat ? (<button>Чат с врачом</button>) : false }
            </div>
          </div>
          <div className={classes.sliderItemBody}>
            <Tooltip title={label} placement="bottom">
              <div className={classes.sliderItemTitle}><span>{label}</span></div>
            </Tooltip>
            <div className={classes.sliderItemLocation}>
              <div className={classes.sliderItemLocationCity}>{region}</div>
              <div className={classes.sliderItemLocationStreet}>{`${street} ${home}`}</div>
            </div>
            <div className={classes.sliderItemNumber}>{phone_number}</div>
          </div>
        </div>
      )
    }) : false;

  const refScroll = createRef();
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    return () => {
      // doctorsTabAdditionCountShowImg(0);
      doctorsTabCountShowImg(countShowImg + 1);
      doctorsTabAsyncInputValue(null);
    }
  }, []);

  useEffect(() => {
    // console.log(countShowImg, 'countShowImg');
    // console.log(additionCountShowImg, 'additionCountShowImg');
    // console.log(dictionaryName, 'dictionaryName');
    // console.log(asyncInputValue, 'asyncInputValue');
  });

  // const [ hasBootstrap, setHasBootstrap ] = useState(false);

  useEffect(() => {
    if(refScroll) {
      refScroll.current.scrollTo(0,0)
    }
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={customClasses.pageBlock}>
          <AsyncSelectMedMap
            url={`${MEDICAL_ORGS_OFFICIAL}&keySearch=${dictionaryName}${asyncInputValue ? '&searchString=' + asyncInputValue : ''}`}
            hasBootstrap={false}
            placeholder="Врач, клиника, болезнь/симптомы, услуг"
          />
        </div>

        <div className={customClasses.pageBlock}>
          <div className={classes.wrapperColumn}>
            <div className={classes.leftColumn}>
              {filter}
            </div>
            <div
              onScroll={event => {
                const sum = event.target.scrollTop + refScroll.current.offsetHeight;
                const scroll = refScroll.current.scrollHeight;

                if(sum === scroll && !isLoading) {
                  setIsLoading(() => true);
                  axios({
                    method: 'get',
                    url: `${
                      MEDICAL_ORGS_OFFICIAL.replace(/step=*.&?/g, `step=${asyncInputValue ? countShowImg+1 : countShowImg+1}`)}&keySearch=${dictionaryName}${asyncInputValue ? '&searchString=' + asyncInputValue : ''
                    }`,
                  }).then(res => {
                    const { data: { data } } = res;

                    doctorsTabSliderData({
                      clinics: sliderData.clinics ? [...sliderData.clinics, ...data.clinics] : [],
                      doctors: sliderData.doctors ? [...sliderData.doctors, ...data.doctors] : [],
                    });
                    setIsLoading(() => false);
                    console.log('request scroll from clinics page')
                    doctorsTabCountShowImg(countShowImg + 1)
                  });
                }
              }}
              ref={refScroll}
              className={classes.rightColumn}
              id="scroll_wrapper"
            >
              {scroll}
              {
                isLoading ? (
                  <div style={{ paddingLeft: '40%' }}>
                    Loading ... <CircularProgress disableShrink />
                  </div>
                ) : false
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ClinicsPage;