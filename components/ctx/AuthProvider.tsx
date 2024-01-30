'use client'

import { AuthActionType, AuthContextType } from '@/app/types/auth';
import React, { ReactNode, createContext, useReducer, useState } from 'react'

const authority: boolean = false;
export const AuthContext = createContext(authority);

const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // const [isAuth, dispatch] = useReducer(authReducer,auth);
  const [auth, setAuth] = useState(authority);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

const authReducer = (state: boolean, action: AuthActionType): boolean => {
  switch (action.type) {
    case "AUTHORIZE":
      state = action.payload;
      return state; 

    case "UNAUTHORIZE":
      state = action.payload;
      return state;

    default: {
      return state;
    }
  }
}