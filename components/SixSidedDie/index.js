/* eslint-disable no-param-reassign */
import styled from 'styled-components';

import { getRandomSixSidedDieValue } from '../../lib/rng';
import { getSixSidedDieTransitions } from '../../lib/dice';
import { DICE_COLORS } from '../../constants';

import { Pane } from './Pane';

const SIZES = {
  small: {
    width: 50,
    perspective: 250,
    dots: 7,
  },
  medium: {
    width: 100,
    perspective: 500,
    dots: 15,
  },
  large: {
    width: 200,
    perspective: 1000,
    dots: 30,
  },
};

export function SixSidedDie({ size = 'medium', color = 'red' }) {
  const rollTheDie = (event) => {
    event.stopPropagation();

    const newSideUp = getRandomSixSidedDieValue();
    console.log(`new roll: ${newSideUp}`);

    const transition = getSixSidedDieTransitions(newSideUp);

    event.currentTarget.style.transform = `rotateX(${transition.x}deg) rotateY(${transition.y}deg)`;
  };

  const sizes = SIZES[size];
  const colors = DICE_COLORS[color];

  return (
    <Wrapper
      style={{
        '--pane-size': `${sizes.width}px`,
        '--persp': `${sizes.perspective}px`,
      }}
    >
      <Cube onClick={(e) => rollTheDie(e)}>
        {[
          { side: 'front', number: 1 },
          { side: 'back', number: 6 },
          { side: 'right', number: 3 },
          { side: 'left', number: 4 },
          { side: 'top', number: 2 },
          { side: 'bottom', number: 5 },
        ].map((pane) => {
          return (
            <Pane
              side={pane.side}
              number={pane.number}
              sizes={sizes}
              colors={colors}
            />
          );
        })}
      </Cube>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: var(--pane-size);
  height: var(--pane-size);
  position: relative;

  perspective: var(--persp);
  perspective-origin: 50% 80%;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  transform-style: preserve-3d;

  transition: transform 3s;

  &:hover {
    cursor: pointer;
  }
`;
