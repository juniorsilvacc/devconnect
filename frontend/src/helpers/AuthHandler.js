import Cookies from 'js-cookie';

export const doLogout = () => {
  Cookies.remove('token');
}