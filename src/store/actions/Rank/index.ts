import {
    SET_RANKS,
    SET_RANKS_LOADED,
    SET_CURRENT_RANK,
    SET_ERROR
  } from '../actionType';
  
  import axios from 'axios';
  import Rank from 'models/modules/Rank.interface';
  import { Dispatch } from 'redux';
  import State from 'models/State.interface';
  
  export const setRanksRedux = (payload : Rank[] | null) => ({
    type: SET_RANKS,
    payload,
  });
  
  export const setLoadedRedux = (payload:boolean) => ({
    type: SET_RANKS_LOADED,
    payload,
  });
  
  export const setCurrentRankRedux = (payload:Rank | null) => ({
    type: SET_CURRENT_RANK,
    payload,
  });
  
  export const setError = (payload: any) => ({
    type: SET_ERROR,
    payload,
  });
  
  export const getRanks = () => async (dispatch:Dispatch, getState: () =>State) => {
   
    //console.log('getRanks method')

    const options = {
      method: 'GET',
      url: 'https://rocket-league1.p.rapidapi.com/ranks/930226ec26174a988dff84898ee13ded',
      headers: {
        'User-Agent': 'RapidAPI Playground',
        'Accept-Encoding': 'identity',
        'X-RapidAPI-Key': 'a40f81e70fmshc5b4149b7a40cbcp1a0a00jsn2fc169305bf5',
        'X-RapidAPI-Host': 'rocket-league1.p.rapidapi.com'
      }
    };
    
    axios.request(options as any).then(function (response) {
      //console.log(response)
      dispatch(setRanksRedux(response.data.ranks));
      dispatch(setLoadedRedux(true));
    }).catch(function (e) {
      console.log(e)
      dispatch(setRanksRedux(null));
      dispatch(setError(e));
      console.warn(e);});
    

  
  };

  