//@flow
import * as React from "react";
import type {UserObjType} from './App';

export const GlobalContext: React.Context<UserObjType> = React.createContext({
  user: null,
  user_id: null
});