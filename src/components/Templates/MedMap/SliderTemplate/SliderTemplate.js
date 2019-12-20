import React, { useCallback, useEffect, useState } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import arrowLeft from '../../../../assets/images/medicalPng/arrowLeft.png';
import arrowRight from '../../../../assets/images/medicalPng/arrowRight.png';

import useStyles from './style';
import { CLINICS_PAGE_LINK } from '../../../../config/pageLinks';

const clinics = 'Клиники';
const doctors = 'Врачи';
const myDoctors = 'Мои лечащие врачи';

const SliderTemplate = props => {
  const {
    dictionaryName,
    sliderData,
    doctorsTabSliderData,
    url,
    asyncInputValue,
    sliderUrl,
    doctorsTabUrl,
    countShowImg,
    doctorsTabCountShowImg,
  } = props;

  const classes = useStyles();
  const theme = useTheme();

  function handleClick(param) {
    if(!isLoading) {
      return function () {
        let num = 0;
        
        const timerId = setInterval(() => {
          num += 1;
          if(num === 24) {
            clearInterval(timerId);
          }
      
          if(param === '+') {
            nodeElem.scrollLeft += 11;
          } else {
            nodeElem.scrollLeft -= 11;
          }
        }, 0);
      }
    }
  }

  const [ nodeElem, setNodeElem ] = useState(null);
  const identNode = useCallback(node => {
    if(node) {
      setNodeElem(node);
    }
  }, []);

  const [ scrollLeft, setScrollLeft ] = useState(0);
  const maxScrollLeft = nodeElem ? nodeElem.scrollWidth - nodeElem.clientWidth : false;

  useEffect(() => {
    if(props.width === 776 || props.width === 1842 || props.width === 1305) {
      setScrollLeft(nodeElem.scrollLeft);
    }
  }, [props.width]);

  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    if(asyncInputValue === null) {
      doctorsTabCountShowImg(0);
      // doctorsTabCountShowImg(-1);
    } else {
      doctorsTabCountShowImg(0);
    }
  }, [asyncInputValue]);

  const scrollFunc = () => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const result = await axios({
          method: 'get',
          url: url.replace(/step=0/g, `step=${countShowImg+1}`)
        });

        const { data: { data }, status, statusText } = result;
        doctorsTabCountShowImg(countShowImg + 1);

        if(status === 200) {
          console.log('request scroll from slider template');
          if(dictionaryName === 'clinics') {
            doctorsTabSliderData({
              clinics: [ ...sliderData, ...data.clinics ],
              doctors: []
            });
          } else if(dictionaryName === 'doctors') {
            doctorsTabSliderData({
              clinics: [],
              doctors: [ ...sliderData, ...data.doctors ]
            });
          } else {
            // if together
          }

          setIsLoading(false);
        }
      } catch (e) {
        setIsLoading(false);
        console.error(e.message, 'slider template');
      }
    };
  
    fetchData();
  };



  return (
    <div className={classes.sliderPageWrapper}>
      <div className={classes.sliderScroll}>
        <div className={classes.sliderList}>
          <div
            onScroll={event => {
              setScrollLeft(event.target.scrollLeft);
              if(maxScrollLeft === event.target.scrollLeft && !isLoading) {
                scrollFunc();
              }
            }}
            ref={identNode}
            className={classes.sliderListA}
          >
            <div className={classes.sliderListB}>
              {
                sliderData ? sliderData.map((item, index) => {
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
                        <div className={type === clinics ? classes.slideImageClinics : classes.slideImageDoctors }>
                          <LazyLoad
                            onContentVisible={() => {
                              // console.log('lazy load');
                            }}
                            height={200}
                            offsetHorizontal={200}
                          >
                          <img
                            className={classes.sliderItemAvatar}
                            src={imgPath}
                            alt={label}
                          />
                          </LazyLoad>
                        </div>
                        <div className={classes.sliderItemHeaderBtn}>
                          <button>Записаться</button>
                          { have_chat ? (<button>Чат с врачом</button>) : false }
                        </div>
                      </div>
                      <div className={classes.sliderItemBody}>
                        <div className={classes.sliderItemTitle}>{label}</div>
                        <div className={classes.sliderItemLocation}>
                          <div className={classes.sliderItemLocationCity}>{region}</div>
                          <div className={classes.sliderItemLocationStreet}>{`${street} ${home}`}</div>
                        </div>
                        <div className={classes.sliderItemNumber}>{phone_number}</div>
                      </div>
                    </div>
                  )
                }) : false
              }
              {
                isLoading ? (
                  <div>
                    <div style={{ paddingTop: 40 }}>Loading...</div>
                    <CircularProgress disableShrink />
                  </div>
    
                ) : false
              }
            </div>
          </div>
        </div>
        {
          scrollLeft !== 0 ? (
            <div className={`${classes.sliderStepper} ${classes.sliderStepperLeft}`}>
              <Button
                size="small"
                onClick={() => {
                  handleClick('-')()
                }}
                // onClick={handleClick}
              >
                <img src={arrowLeft} alt=""/>
              </Button>
            </div>
          ) : false
        }
        {
          maxScrollLeft !== scrollLeft ? (
            <div className={`${classes.sliderStepper} ${classes.sliderStepperRight}`}>
              <Button
                disabled={isLoading}
                size="small"
                onClick={() => {
                  handleClick('+')()
                }}
              >
                <img src={arrowRight} alt=""/>
              </Button>
            </div>
          ) : false
        }
      </div>
      <div className={classes.sliderBtnLink}>
        {
          !isLoading ? (
            <Link className={classes.sliderLink} to={CLINICS_PAGE_LINK}>Смотреть все {sliderData ? sliderData.length : ''}</Link>
          ) : false
        }
      </div>
    </div>
  );
};

export default withResizeDetector(SliderTemplate);
