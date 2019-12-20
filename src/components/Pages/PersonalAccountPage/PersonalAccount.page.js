import React, { createContext } from 'react';
import { useCookies } from 'react-cookie';

import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { DesctopSvg, StatisticSvg, DocumentsSvg, ApplicationsSvg, SupportSvg, BalanceSvg } from '../../../config/pageSvg';
import {
  DESKTOP_PAGE_LINK,
  APPLICATIONS_PAGE_LINK,
  IT_SUPPORT_PAGE_LINK,
  DOCUMENTS_PAGE_LINK,
  STATISTICS_PAGE_LINK
} from '../../../config/pageLinks';

import MedMapDrawer from './MedMapDrawer';
import { useStyles } from './style';

const menuLinksUp = [
  { id: 0, nameLink: 'Рабочий стол', LinkIcon: DesctopSvg,  classNameSvg: 'iconSvg', pathname: DESKTOP_PAGE_LINK },
  { id: 1, nameLink: 'Статистика моего здоровья', LinkIcon: StatisticSvg,  classNameSvg: 'iconSvg', pathname: STATISTICS_PAGE_LINK },
  { id: 2, nameLink: 'Документы', LinkIcon: DocumentsSvg,  classNameSvg: 'outlinedSvg', pathname: DOCUMENTS_PAGE_LINK },
  { id: 3, nameLink: 'Приложения', LinkIcon: ApplicationsSvg,  classNameSvg: 'iconSvg', pathname: APPLICATIONS_PAGE_LINK },
  { id: 4, nameLink: 'IT-поддержка', LinkIcon: SupportSvg ,  classNameSvg: 'iconSvg', pathname: IT_SUPPORT_PAGE_LINK },
];

const menuLinksDown = [
  // { id: 0, nameLink: 'Баланс', icon: null, LinkIcon: BalanceSvg, classNameSvg: 'outlinedSvg' },
  { id: 1, nameLink: 'Выйти', icon: null, LinkIcon: BalanceSvg , classNameSvg: 'outlinedSvg'},
];

export const PersonalAccountContext = createContext();

const PersonalAccountPage = props => {
  const { isAuth, role, userIsAuth, userRole, snackbarsOpen, history, personalAccountPageDesktopActiveTab } = props;
  // const customClasses2 = useStyles();


  const [cookies, setCookie] = useCookies();

  return (
    <PersonalAccountContext.Provider value={{
      // cookies,
      isAuth,
      role,
      userIsAuth,
      userRole,
      // customClasses2,
      snackbarsOpen,
      history,
      personalAccountPageDesktopActiveTab
    }}>
      <MedMapDrawer
        menuLinksUp={menuLinksUp}
        menuLinksDown={menuLinksDown}
      />
    </PersonalAccountContext.Provider>
  )
};

export default PersonalAccountPage;
