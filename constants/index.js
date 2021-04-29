export { DICE_COLORS } from './color';

export const MIN_X_REVOLUTIONS = -5;
export const MAX_X_REVOLUTIONS = 5;
export const MIN_Y_REVOLUTIONS = -5;
export const MAX_Y_REVOLUTIONS = 5;

export const SIX_SIDED_TRANSITIONS = {
  1: {
    x: 0,
    y: 0,
  },
  2: {
    x: -1,
    y: 0,
  },
  3: {
    x: 0,
    y: -1,
  },
  4: {
    x: 0,
    y: 1,
  },
  5: {
    x: 1,
    y: 0,
  },
  6: {
    x: 2,
    y: 0,
  },
};
