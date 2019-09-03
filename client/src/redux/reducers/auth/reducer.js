import { combineReducers } from 'redux';

const INITIAL_STATE = {
  loggedInfo: {
    token: null,
    userInfo: {
      _id: null,
      email: null
    }
  },
  loginState: {
    email: null,
    password: null,
    isRemember: false
  },
  registerState: {
    email: null,
    password: null,
    confirm: null,
  }
};

const loggedInfo = (state = INITIAL_STATE.loggedInfo, { type }) => {
  switch (type) {
    default: return state;
  }
};

const loginState = (state = INITIAL_STATE.loginState, { type }) => {
  switch (type) {
    default: return state;
  }
};

const registerState = (state = INITIAL_STATE.registerState, { type }) => {
  switch (type) {
    default: return state;
  }
};

export default combineReducers({
  loggedInfo,
  loginState,
  registerState
});