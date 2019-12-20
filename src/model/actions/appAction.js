export const APP_TITLE_CHANGE = 'APP_TITLE_CHANGE';
export const appTitleChange = title => ({
  type: APP_TITLE_CHANGE,
  title
});

export const SNACKBARS_OPEN = 'SNACKBARS_OPEN';
export const snackbarsOpen = openSnackbar => ({
  type: SNACKBARS_OPEN,
  openSnackbar
});

export const PERSONAL_ACCOUNT_PAGE_DESKTOP_ACTIVE_NODE = 'PERSONAL_ACCOUNT_PAGE_DESKTOP_ACTIVE_NODE';
export const personalAccountPageDesktopActiveTab = desktopActiveTab => ({
  type: PERSONAL_ACCOUNT_PAGE_DESKTOP_ACTIVE_NODE,
  desktopActiveTab
});