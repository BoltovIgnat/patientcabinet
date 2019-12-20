import React, { useState, useEffect, useMemo, useCallback, createRef } from 'react';

import { Link } from 'react-router-dom';

import useStyles, { root } from './style';

import diagnose  from '../../../assets/images/diagnose.png';
import treat  from '../../../assets/images/treat.png';
import watch  from '../../../assets/images/watch.png';
import visitDoctorFullTime  from '../../../assets/images/visitDoctorFullTime.png';
import visitDoctorRemote  from '../../../assets/images/visitDoctorRemote.png';
import visitHistory  from '../../../assets/images/visitHistory.png';
import visitNotHistory  from '../../../assets/images/visitNoHistory.png';

import {
  DIAGNOSIS_PAGE_LINK,
  TREATMENT_PAGE_LINK,
  OBSERVATION_PAGE_LINK
} from '../../../config/pageLinks';

const MainPage = props => {
  const { customClasses } = props;
  const classes = useStyles();
  const [ ref1, ref2 ] = [ createRef(), createRef() ];

  const [ systemMedMap, setSystemMedMap] = useState(false);
  const systemMedMapCallback = useCallback(bool => {
    setSystemMedMap(bool);

    if(ref1 && ref2) {
      if(!bool) {
        ref2.current.classList.remove(classes.active);
        ref1.current.classList.add(classes.active);
      } else {
        ref1.current.classList.remove(classes.active);
        ref2.current.classList.add(classes.active);
      }
    }
  }, [ systemMedMap ]);
  
  return (
    <div id='main__page' className={classes.root}>
      <section className={classes.med__help}>
        <div className={classes.container}>
          <h1 className={classes.main__heading}>Проверить и получить медицинскую помощь</h1>
          <div className={classes.medcare__check}>
            <h2 className={classes.header}>Проверить сейчас</h2>
            <div className={classes.list}>
              <div className={classes.item}>
                <img src={diagnose} alt="diagnoz"/>
                <Link className={customClasses.btn} to={DIAGNOSIS_PAGE_LINK}>Диагноз</Link>
              </div>
              <div className={classes.item}>
                <img src={treat} alt="lechenie"/>
                <Link className={customClasses.btn} to={TREATMENT_PAGE_LINK}>Лечение</Link>
              </div>
              <div className={classes.item}>
                <img src={watch} alt="nabludenie"/>
                <Link className={customClasses.btn} to={OBSERVATION_PAGE_LINK}>Наблюдение</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.getPlan}>
        <div className={customClasses.container}>
          <h2 className={customClasses.headerTitle}>Получить план лечения</h2>
          <div className={classes.getPlanWrapper}>
            <div className={classes.radioGroup}>
              <input  className={`${classes.radioInput} ${classes.planDoctor}`} type="radio" name="planForm" id="planDoctor"/>
              <input className={`${classes.radioInput} ${classes.planMedMap}`} type="radio" name="planForm" id="planMedMap"/>

              <div
                onClick={() => systemMedMapCallback(false)}
                ref={ref1}
                className={`${classes.switch} ${classes.radioDoctor} ${classes.active}`}>
                <div className={classes.radioBg}></div>
                <label className={classes.radioLabel}>от врача</label>
              </div>

              <div
                onClick={() => systemMedMapCallback(true)}
                ref={ref2}
                className={`${classes.switch} ${classes.radioMedMap}`}>
                <div className={classes.radioBg}></div>
                <label className={classes.radioLabel}>от системы MedMap</label>
              </div>
            </div>

            <div className={classes.planSubTitle}>запишитесь на приём</div>
            
            <div className={classes.visit}>
              
              {
                !systemMedMap ? (
                  <div className={`${classes.visitChoice} ${classes.visitDoctor}`}>
                    <div className={classes.visitList}>
                      <div className={classes.visitItem}>
                        <img src={visitDoctorFullTime} alt="visitDoctorFullTime"/>
                        <button className={customClasses.btn}>очный прием</button>
                      </div>
                      <div className={classes.visitItem}>
                        <img src={visitDoctorRemote} alt="visitDoctorRemote"/>
                        <button className={customClasses.btn}>дистанционный прием</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`${classes.visitChoice} ${classes.visitMedMap}`}>
                    <div className={classes.visitList}>
                      <div className={classes.visitItem}>
                        <img src={visitHistory} alt="visitHistory"/>
                        <button className={customClasses.btn}>с учетом истории заболевания</button>
                      </div>
                      <div className={classes.visitItem}>
                        <img src={visitNotHistory} alt="visitNotHistory"/>
                        <button className={customClasses.btn}>без учета истории заболевания</button>
                      </div>
                    </div>
                  </div>
                )
              }
              
            </div>
          </div>
        </div>
      </section>
      <section className={classes.info}>
        <h2 className={customClasses.headerTitle}>MedMap - умная медицинская карта</h2>
        <ul className={classes.infoList}>
          <li className={classes.infoItem}>
            <span>01</span>
            <p>Для тех, кто:</p>
            <ul>
              <li>планирует жизнь с учётом особенностей своего здоровья</li>
              <li>хочет быть на прямой связи со своим врачом</li>
              <li>желает подтвердить диагноз и лечение</li>
            </ul>
          </li>
          <li className={classes.infoItem}>
            <span>02</span>
            <p>В тех случаях,
              когда необходимо получить:</p>
            <ul>
              <li>консультацию врача для принятия совместного решения</li>
              <li>второе мнение о диагнозе и лечении</li>
              <li>достоверную информацию о заболевании</li>
            </ul>
          </li>
          <li className={classes.infoItem}>
            <span>03</span>
            <p>Ваша информация в MedMap:</p>
            <ul>
              <li>надежно охраняется согласно требованиям ФЗ №152</li>
              <li>доступна в любой момент</li>
              <li>принадлежит вам, и ввы сами решаете, кому предоставлять доступ к ней</li>
              <li>автоматически проверяется на соответствие международным рекомендациям</li>
            </ul>
          </li>
          <li className={classes.infoItem}>
            <span>04</span>
            <p>Условия использования:</p>
            <ul>
              <li>вы можете бесплатно пользоваться умной медицинской картой с любого устройства</li>
              <li>вы сами решаете, за что и какому врачу платить</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MainPage;
