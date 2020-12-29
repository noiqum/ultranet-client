import * as React from "react";
import { useReducer } from "react";

import { TGlobalState, TUserType } from "../../common.types";
import { userReducer } from "../reducer/userReducer";

type Props = {
  children: React.ReactNode;
};

const initialState: TGlobalState = {
  user: {
    email: null,
    id: null,
    token: null,
    username: null,
  },
};

export const globalContext = React.createContext<{
  state: TGlobalState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
// const mainReducer = ({ user, expenses }: { user: userType; expenses: { expenses: expenseType[] } }, action: any) => ({
//     user: userReducer(user, action),
//     expenses: expenseReducer(expenses, action),
// });

// export const UserProvider: React.FC = ({ children }: Props) => {
//     const [state, dispatch] = useReducer(mainReducer, initialState);

//     return <userContext.Provider value={{ state, dispatch }}>{children}</userContext.Provider>;
// };

const mainReducer = ({ user }: { user: TUserType }, action: any) => ({
  user: userReducer(user, action),
});

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};
