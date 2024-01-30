export type AuthActionType = 
| { type: 'AUTHORIZE'; payload: boolean }
| { type: 'UNAUTHORIZE'; payload: boolean };

export type AuthContextType = {
  isAuth: boolean,
  dispatch: React.Dispatch<AuthActionType>
}