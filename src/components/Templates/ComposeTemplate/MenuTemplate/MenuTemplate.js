import React from 'react';
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";

import List from './List';

import logoFut from '../../../../assets/images/logoFut.png';

import {
  AOAMT_PAGE_LINK,
  DOCTORS_PAGE_LINK,
  REVIEWS_PAGE_LINK,
  
  SIGN_IN_PAGE_LINK,
  PERSONAL_ACCOUNT_PAGE_LINK,
  SERVICES_PAGE_LINK,
  RECEPTION_PAGE_LINK,
  PRIVACY_POLICY_PAGE_LINK,
  PERSONAL_DATA_PAGE_LINK
} from '../../../../config/pageLinks';

import {
  APP_PAGE_MAIN,
  
  APP_PAGE_DIAGNOSIS,
  APP_PAGE_TREATMENT,
  APP_PAGE_OBSERVATION,
  
  APP_PAGE_AOAMT,
  APP_PAGE_DOCTORS,
  APP_PAGE_REVIEWS,
  APP_PAGE_REGISTRATION,
  APP_PAGE_PERSONAL_ACCOUNT,
  APP_PAGE_SERVICES,
  APP_PAGE_RECEPTION,
  APP_PAGE_PRIVACY,
  APP_PAGE_PERSONAL_DATA,
  
  APP_PAGE_PERSONAL_SETTINGS,
  APP_PAGE_CLABABLE_LOGO,
  APP_PAGE_APPOINTMENT,
  APP_PAGE_CLIABLE_FIELD,
  APP_PAGE_MAIN_LEFT_MENU,
  APP_PAGE_MAIN_UP_MENU,
} from '../../../../config/roles/roles';

import useStyles from "./style";
const MenuTemplate = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Divider />
      <footer id="template__menu" className={classes.root}>
        <div className={classes.container}>
          <div className={classes.footerList}>
            <div className={classes.footerItem}>
              <h3 className={classes.footerHeader}>О нас</h3>
              <a href="https://aoamt.ru/">АО "АМТ"</a>
              {/*<List*/}
              {/*  path={AOAMT_PAGE_LINK}*/}
              {/*  permission={APP_PAGE_AOAMT}*/}
              {/*  text={'АО "АМТ"'}/>*/}
              <List
                path={DOCTORS_PAGE_LINK}
                permission={APP_PAGE_DOCTORS}
                text="Врачам"/>
              {/*<List*/}
              {/*  path={REVIEWS_PAGE_LINK}*/}
              {/*  permission={APP_PAGE_REVIEWS}*/}
              {/*  text="Отзывы"/>*/}
            </div>
            <div className={classes.footerItem}>
              <h3 className={classes.footerHeader}>Пациенту</h3>
              <List
                path={PERSONAL_ACCOUNT_PAGE_LINK}
                permission={APP_PAGE_PERSONAL_ACCOUNT}
                text="Личный кабинет пациента"/>
              {/*<List*/}
              {/*    path={SERVICES_PAGE_LINK}*/}
              {/*    permission={APP_PAGE_SERVICES}*/}
              {/*    text="Услуги"/>*/}
              {/*<List*/}
              {/*    path={RECEPTION_PAGE_LINK}*/}
              {/*    permission={APP_PAGE_RECEPTION}*/}
              {/*    text="Запись на прием"/>*/}
              <List
                path={PRIVACY_POLICY_PAGE_LINK}
                permission={APP_PAGE_PRIVACY}
                text="Политика конфиденциальности"/>
              <List
                path={PERSONAL_DATA_PAGE_LINK}
                permission={APP_PAGE_PERSONAL_DATA}
                text="Согласие на обработку персональных данных"/>
            </div>
            <div className={classes.footerItem}>
              <img src={logoFut} alt="logo footer"/>
              <p><span>MedMap - онлайн платформа</span> © АО АМТ, 2018</p>
              <p>Акционерное общество "Агентство медицинских технологий"</p>
              <br/>
              <p>123022, г.Москва, ул.1905 года д. 10А стр.1</p>
              <p>+7 (495) 118-35-59</p>
              <p>ОГРН 1187746106712</p>
            </div>
          </div>
          <div className={classes.footerInfo}>
            <p>Информация, предоставленная на сайте, не может быть использована для постановки диагноза, назначения лечения, и не заменяет прием врача</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
};

export default MenuTemplate;
