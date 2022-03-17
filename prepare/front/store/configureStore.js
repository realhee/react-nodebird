import { createWrapper } from "next-redux-wrapper";
// const { createWrapper } = require("next-redux-wrapper"); // 옛날 문법
import { createStore } from "redux";
import reducer from "../reducers";

const configureStore = () => {
  const store = createStore(reducer);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "choi",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
