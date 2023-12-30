import { actions } from "../constant/actions";

export const prevAnsReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_STATE: {
      const { payload } = action;
      return { ...state, ...payload };
    }
    case actions.SET_QUESTION: {
      const { payload } = action;

      return { ...state, question: payload };
    }
    case actions.SET_ANSWER: {
      const { payload } = action;

      return { ...state, prevAns: payload };
    }
    case actions.SET_LOADING: {
      const { payload } = action;
      return { ...state, loading: payload };
    }

    default:
      const { payload } = action;
      console.log("default", payload, action);

      return state;
  }
};
