import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';
import {
  DASHBOARD_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';

// load user
export const loadDashboard = () => async dispatch => {
  // eslint-disable-next-line no-undef
  if (localStorage.token) {
    // eslint-disable-next-line no-undef
    setAuthToken(localStorage.token);
  }
  try {
    const resp = await axios.get('/api/profile/dashboard');
    console.log(resp);
    dispatch({
      type: DASHBOARD_LOADED,
      payload: resp.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// login user
export const login = (username, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ username, password });
  try {
    const resp = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: resp.data
    });

    dispatch(loadDashboard());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
