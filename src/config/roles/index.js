import * as roles from './roles';

const Role = role => permission => {
  return roles.groups[role].permissions.indexOf(permission) > -1;
};

export default Role;
