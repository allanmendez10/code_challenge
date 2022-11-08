import {
    SET_CURRENT_RANK, SET_RANKS_LOADED, SET_RANKS, SET_ERROR
  } from '../../actions/actionType';
  
import Action from 'models/Action.interface';
import Rank from 'models/modules/Rank.interface';
import RankState from 'models/states/RankState.interface';
  
  const initialState: RankState= {
    ranks: [],
    currentRank: null,
    loaded: false,
    rankError: null,
  };
  
  export default (state = initialState, {type, payload}:Action) => {
    switch (type) {
      case SET_RANKS_LOADED:
        return {...state, loaded: payload as boolean};
  
      case SET_CURRENT_RANK:
        return {...state, currentRank: payload as Rank};

      case SET_RANKS:
        return {...state, ranks: payload as Rank[]};
  
      case SET_ERROR:
        return {...state, rankError: payload as any};
  
      default:
        return state;
    }
  };
  