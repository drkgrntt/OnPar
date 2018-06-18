import firebase from 'firebase';
import {
  ADD_SCORE,
  SUBTRACT_SCORE,
  ADD_PLAYER,
  RESET_SCORE_STATE
} from './types';

// PLAYER ACTIONS

export const addPlayer = name => {
  return { type: ADD_PLAYER, payload: name };
};

// SCORE ACTIONS

export const addScore = (score, player) => dispatch => {
  const newScore = score + 1;
  let newState = {};

  if (newScore > 0) {
    newState = { player, score: newScore, proximity: 'over' };
  } else if (newScore < 0) {
    newState = { player, score: newScore, proximity: 'under' };
  } else {
    newState = { player, score: newScore, proximity: 'on' };
  }

  return dispatch({ type: ADD_SCORE, payload: { newState, player } });
};

export const subtractScore = (score, player) => dispatch => {
  const newScore = score - 1;
  let newState = {};

  if (newScore > 0) {
    newState = { player, score: newScore, proximity: 'over' };
  } else if (newScore < 0) {
    newState = { player, score: newScore, proximity: 'under' };
  } else {
    newState = { player, score: newScore, proximity: 'on' };
  }

  return dispatch({ type: SUBTRACT_SCORE, payload: { newState, player } });
};

export const resetScoreState = () => dispatch => {
  return dispatch({ type: RESET_SCORE_STATE });
};
