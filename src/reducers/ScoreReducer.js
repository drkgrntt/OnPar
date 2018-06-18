import _ from 'lodash';
import {
  ADD_SCORE,
  SUBTRACT_SCORE,
  ADD_PLAYER,
  RESET_SCORE_STATE
} from '../actions/types';

const INITIAL_STATE = { 
  scoreCards: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        scoreCards: _.map(state.scoreCards, scoreCard => {
          return scoreCard.player === action.payload.player ? action.payload.newState : scoreCard;
        })
      };
    case SUBTRACT_SCORE:
      return {
        ...state,
        scoreCards: _.map(state.scoreCards, scoreCard => {
          return scoreCard.player === action.payload.player ? action.payload.newState : scoreCard;
        })
      };
    case ADD_PLAYER:
      const newPlayer = { player: action.payload, score: 0, proximity: 'on' };

      return { scoreCards: [...state.scoreCards, newPlayer] };
    case RESET_SCORE_STATE:
      return { scoreCards: [] };
    default:
      return state;
  }
};
