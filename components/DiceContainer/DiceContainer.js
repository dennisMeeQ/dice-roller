import styled from 'styled-components';

import { SixSidedDie } from '../SixSidedDie';
import { CatanDie } from '../CatanDie';

export function DiceContainer({ diceConfig, performRoll, setResult }) {
  return (
    <Wrapper>
      {diceConfig.map(({ size, color, id, type = 'standard' }) => {
        const DieComponent = type === 'catan' ? CatanDie : SixSidedDie;
        return (
          <DieComponent
            size={size}
            color={color}
            setResult={setResult}
            performRoll={performRoll}
            id={id}
            key={id}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;

  /* Chrome fix: isolate without breaking 3D children */
  position: relative;
  isolation: isolate;

  /* Force GPU layer on container */
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
`;
