import { AUTH_LOGIN } from './actionTypes';
import { requestAction } from 'redux/actions/utils';

const demoApiLogin = ({ username }) => new Promise((rs, rj) => {
  setTimeout(() => {
    rs(username);
  }, 2000);
});

export const authLogin = (username, password) => {
  return requestAction(AUTH_LOGIN, demoApiLogin)({
    username,
    password
  });
};

