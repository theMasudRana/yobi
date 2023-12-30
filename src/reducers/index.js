import { prevAnsReducer } from "./prevAnsReducer";
const mainReducer = ({ prevAns }, action) => {
  return {
    prevAns: prevAnsReducer(prevAns, action),
  };
};

export default mainReducer;
