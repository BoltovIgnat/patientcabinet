export const APP_PAGE_MAIN = 'APP_PAGE_MAIN';

export const APP_PAGE_PERSONAL_SETTINGS = 'APP_PAGE_PERSONAL_SETTINGS';
export const APP_PAGE_CLABABLE_LOGO = 'APP_PAGE_CLABABLE_LOGO';
export const APP_PAGE_APPOINTMENT = 'APP_PAGE_APPOINTMENT';
export const APP_PAGE_CLIABLE_FIELD = 'APP_PAGE_CLIABLE_FIELD';
export const APP_PAGE_MAIN_LEFT_MENU = 'APP_PAGE_MAIN_LEFT_MENU';
export const APP_PAGE_MAIN_UP_MENU = 'APP_PAGE_MAIN_UP_MENU';

export const APP_PAGE_DIAGNOSIS = 'APP_PAGE_DIAGNOSIS';
export const APP_PAGE_TREATMENT = 'APP_PAGE_TREATMENT';
export const APP_PAGE_OBSERVATION = 'APP_PAGE_OBSERVATION';

export const APP_PAGE_AOAMT = 'APP_PAGE_AOAMT';
export const APP_PAGE_DOCTORS = 'APP_PAGE_DOCTORS';
export const APP_PAGE_REVIEWS = 'APP_PAGE_REVIEWS';
export const APP_PAGE_CREATE_ACCOUNT = 'APP_PAGE_CREATE_ACCOUNT';
export const APP_PAGE_PASSWORD_RECOVERY = 'APP_PAGE_PASSWORD_RECOVERY';
// export const APP_PAGE_REGISTRATION = 'APP_PAGE_REGISTRATION';

export const APP_PAGE_PERSONAL_ACCOUNT = 'APP_PAGE_PERSONAL_ACCOUNT';

export const APP_PAGE_DESKTOP = 'APP_PAGE_DESKTOP';
export const APP_PAGE_CLINICS = 'APP_PAGE_CLINICS';
export const APP_PAGE_APPLICATIONS = 'APP_PAGE_APPLICATIONS';
export const APP_PAGE_IT_SUPPORT = 'APP_PAGE_IT_SUPPORT';
export const APP_PAGE_DOCUMENTS = 'APP_PAGE_DOCUMENTS';
export const APP_PAGE_STATISTICS = 'APP_PAGE_STATISTICS';


export const APP_PAGE_SERVICES = 'APP_PAGE_SERVICES';
export const APP_PAGE_RECEPTION = 'APP_PAGE_RECEPTION';
export const APP_PAGE_PRIVACY = 'APP_PAGE_PRIVACY';
export const APP_PAGE_PERSONAL_DATA = 'APP_PAGE_PERSONAL_DATA';

export const ROLE_ADMIN = 'admin';
export const ROLE_PATIENT = 'patient';
export const ROLE_LAYOUT = 'layout';

export const groups = {
  [ ROLE_ADMIN ]: {
    permissions: [
      APP_PAGE_MAIN,

      APP_PAGE_PERSONAL_SETTINGS,
      APP_PAGE_CLABABLE_LOGO,
      APP_PAGE_APPOINTMENT,
      APP_PAGE_CLIABLE_FIELD,
      APP_PAGE_MAIN_LEFT_MENU,
      APP_PAGE_MAIN_UP_MENU,

      APP_PAGE_DIAGNOSIS,
      APP_PAGE_TREATMENT,
      APP_PAGE_OBSERVATION,

      APP_PAGE_AOAMT,
      APP_PAGE_DOCTORS,
      APP_PAGE_REVIEWS,
      APP_PAGE_CREATE_ACCOUNT,
      APP_PAGE_PASSWORD_RECOVERY,
      // APP_PAGE_REGISTRATION,
      APP_PAGE_SERVICES,
      APP_PAGE_RECEPTION,
      APP_PAGE_PRIVACY,
      APP_PAGE_PERSONAL_DATA,
      APP_PAGE_PERSONAL_ACCOUNT,
      APP_PAGE_DESKTOP,
      APP_PAGE_CLINICS,
      APP_PAGE_APPLICATIONS,
      APP_PAGE_IT_SUPPORT,
      APP_PAGE_DOCUMENTS,
      APP_PAGE_STATISTICS
    ]
  },
  [ ROLE_PATIENT ]: {
    permissions: [
      APP_PAGE_MAIN,
      
      APP_PAGE_PERSONAL_SETTINGS,
      APP_PAGE_CLABABLE_LOGO,
      APP_PAGE_APPOINTMENT,
      APP_PAGE_CLIABLE_FIELD,
      APP_PAGE_MAIN_LEFT_MENU,
      APP_PAGE_MAIN_UP_MENU,
  
      APP_PAGE_DIAGNOSIS,
      APP_PAGE_TREATMENT,
      APP_PAGE_OBSERVATION,
  
      APP_PAGE_AOAMT,
      APP_PAGE_DOCTORS,
      APP_PAGE_REVIEWS,
      APP_PAGE_CREATE_ACCOUNT,
      APP_PAGE_PASSWORD_RECOVERY,
      // APP_PAGE_REGISTRATION,
      APP_PAGE_SERVICES,
      APP_PAGE_RECEPTION,
      APP_PAGE_PRIVACY,
      APP_PAGE_PERSONAL_DATA,
      APP_PAGE_PERSONAL_ACCOUNT,
      APP_PAGE_DESKTOP,
      APP_PAGE_CLINICS,
      APP_PAGE_APPLICATIONS,
      APP_PAGE_IT_SUPPORT,
      APP_PAGE_DOCUMENTS,
      APP_PAGE_STATISTICS
    ]
  },
  [ ROLE_LAYOUT ]: {
    permissions: [
      APP_PAGE_CREATE_ACCOUNT,
      APP_PAGE_PASSWORD_RECOVERY,
      // APP_PAGE_REGISTRATION,
  
      APP_PAGE_DIAGNOSIS,
      APP_PAGE_TREATMENT,
      APP_PAGE_OBSERVATION,
  
      APP_PAGE_AOAMT,
      APP_PAGE_DOCTORS,
      APP_PAGE_REVIEWS,
      APP_PAGE_SERVICES,
      APP_PAGE_RECEPTION,
      APP_PAGE_PRIVACY,
      APP_PAGE_PERSONAL_DATA
    ]
  },
};
