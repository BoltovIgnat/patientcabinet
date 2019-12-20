// export const { NODE_ENV } = { NODE_ENV: 'p' };
export const { NODE_ENV } = process.env;

export const REG_EXP_LOCATION = new RegExp('localhost', 'i');
export const PATH = window.location.href.match(REG_EXP_LOCATION) ? 'http://localhost:8082' : 'https://' +  window.location.hostname;
// export const PATH = window.location.href.match(REG_EXP_LOCATION) ? 'https://dev7.med-map.ru' : 'https://' +  window.location.hostname;

// =================

export const GET_TOKEN =
  'https://dev4.med-map.ru/api/Services/getToken';
export const GET_AUTH =
  'https://dev4.med-map.ru/api/Services/getAuth';
export const CHECK_AUTH =
  'https://dev4.med-map.ru/api/Services/checkAuth';
export const ADD_PATIENT =
  'https://dev4.med-map.ru/api/Services/addPatient';
export const CONFIRM_ADD_PATIENT =
  'https://dev4.med-map.ru/api/Services/confirmAddPatient';
export const SEND_SMS_CODE =
  'https://dev4.med-map.ru/api/Services/sendSmsCode';
export const SIGN_OUT =
  'https://dev4.med-map.ru/api/Services/signOuth';
export const RESTORY_PASSWORD =
  'https://dev4.med-map.ru/api/Services/restorePassword';
export const CONFIRM_RESTORE_PASSWORD =
'https://dev4.med-map.ru/api/Services/confirmRestorePassword';

// regexp; to use with test function

export const regexpDate = /^\d*\.*\d*\.*\d*$/;
export const regexpText = /^[a-zA-Zа-яёА-ЯЁ]*$/;

// dictionary
export const ANYTHING_TEST = `${PATH}/nosql/lib/Rls`;

// ==================

export const MEDICAL_ORGS_OFFICIAL = 'https://dev4.med-map.ru/nosql/lib/Api?dictionaryName=Api&num=20&step=0';