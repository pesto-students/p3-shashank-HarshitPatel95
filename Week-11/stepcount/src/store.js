import { createStore } from "redux";

const initialState = {
  count: 0,
};

const stepsReduces = (state = initialState, action) => {
  switch (action.type) {
    case "INC_STEP":
      return { ...state, count: state.count + 1 };
    case "RESET_STEP":
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
};

const store = createStore(stepsReduces);

export default store;
