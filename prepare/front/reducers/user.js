export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// action creator
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state, // 유지하고픈 데이터
        isLoggedIn: true, // 바꾸고싶은 데이터
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
