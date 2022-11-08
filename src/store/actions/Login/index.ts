import {
    SET_LOGIN,
    SET_USER_LOGGED,
    SET_ERROR,
  } from '../actionType';
  
  import { Dispatch } from 'redux';
  import State from 'models/State.interface';
  import User from 'models/modules/User.interface';
  
  export const setIsLoggedRedux = (payload : boolean) => ({
    type: SET_LOGIN,
    payload,
  });
  
  export const setUserLoggedRedux = (payload:User) => ({
    type: SET_USER_LOGGED,
    payload,
  });
  
  export const setError = (payload: any) => ({
    type: SET_ERROR,
    payload,
  });
  

  export const login = (username:String, password:String) => async (dispatch:Dispatch, getState: () =>State) => {
    try {

      const user = <User>{
        username:username,
        password:password
      }
     
  
     console.log(user);
  
      dispatch(setUserLoggedRedux(user));
      dispatch(setIsLoggedRedux(true));
    } catch (e) {
      dispatch(setError(e));
      console.warn(e);
    }
  };
  
  