import { useContext, useReducer } from "react";
import reducers from "../reducers";
import { YobiContext } from "./createContext";
import { initialState } from "./state";

let YobiProvider = ({ children }) => {
	return (
		<YobiContext.Provider value={useReducer(reducers, initialState)}>
			{children}
		</YobiContext.Provider>
	);
};

export const useStateValue = () => useContext(YobiContext);

export default YobiProvider;
