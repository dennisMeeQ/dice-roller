/* eslint-disable no-param-reassign */
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { getRandomSixSidedDieValue } from '../../lib/rng';
import { getSixSidedDieTransitions } from '../../lib/dice';
import { DICE_COLORS_SETS } from '../../constants';

import { Pane } from './Pane';

const SIZES = {
  small: {
    width: 50,
    perspective: 250,
  },
  medium: {
    width: 100,
    perspective: 500,
  },
  large: {
    width: 200,
    perspective: 1000,
  },
};

const SYMBOL_MAP = {
  1: 'pirate',
  2: 'pirate',
  3: 'pirate',
  4: 'city-green',
  5: 'city-blue',
  6: 'city-yellow',
};

export function CatanDie({ size = 'medium', id }) {
  const [currentTransition, setCurrentTransition] = useState({ x: 0, y: 0 });

  const rollTheDie = useCallback(
    (event) => {
      event.stopPropagation();

      const newSideUp = getRandomSixSidedDieValue();
      console.log(`catan dice #${id}: ${SYMBOL_MAP[newSideUp]}`);

      const transition = getSixSidedDieTransitions(newSideUp);
      setCurrentTransition(transition);
    },
    [id]
  );

  useEffect(() => {
    document.addEventListener('dice:roll', rollTheDie);

    return () => {
      document.removeEventListener('dice:roll', rollTheDie);
    };
  }, [rollTheDie]);

  const sizes = SIZES[size];
  const colors = DICE_COLORS_SETS.beige;

  return (
    <Wrapper $paneSize={sizes.width} $persp={sizes.perspective}>
      <Cube
        onClick={(e) => rollTheDie(e)}
        $xTrans={currentTransition.x}
        $yTrans={currentTransition.y}
      >
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
              symbol={SYMBOL_MAP[pane.number]}
              sizes={sizes}
              colors={colors}
              key={pane.number}
            />
          );
        })}
      </Cube>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: ${(props) => props.$paneSize}px;
  height: ${(props) => props.$paneSize}px;
  position: relative;

  perspective: ${(props) => props.$persp}px;
  -webkit-perspective: ${(props) => props.$persp}px;
  perspective-origin: 50% 80%;
  -webkit-perspective-origin: 50% 80%;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: transform 3s;
  transform: rotateX(${(props) => props.$xTrans}deg)
    rotateY(${(props) => props.$yTrans}deg);
  -webkit-transform: rotateX(${(props) => props.$xTrans}deg)
    rotateY(${(props) => props.$yTrans}deg);

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  &:hover {
    cursor: pointer;
  }
`;
