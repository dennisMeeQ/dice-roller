import { getRandomIntInRange } from './rng';

import {
  SIX_SIDED_TRANSITIONS,
  MAX_X_REVOLUTIONS,
  MIN_X_REVOLUTIONS,
  MAX_Y_REVOLUTIONS,
  MIN_Y_REVOLUTIONS,
} from '../constants';

export const getSixSidedDieTransitions = (newSide) => {
  if (!newSide) {
    console.error('newSide not set');
  }

  const transition = SIX_SIDED_TRANSITIONS[newSide];

  const addXRevolutions = getRandomIntInRange(
    MIN_X_REVOLUTIONS,
    MAX_X_REVOLUTIONS
  );
  const addYRevolutions = getRandomIntInRange(
    MIN_Y_REVOLUTIONS,
    MAX_Y_REVOLUTIONS
  );

  const newX = transition.x * 90 + addXRevolutions * 360;
  const newY = transition.y * 90 + addYRevolutions * 360;

  return {
    x: newX,
    y: newY,
  };
};
