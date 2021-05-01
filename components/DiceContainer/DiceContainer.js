import styled from 'styled-components';

import { SixSidedDie } from '../SixSidedDie';

export function DiceContainer({ diceConfig, performRoll, setResult }) {
  return (
    <Wrapper>
      {diceConfig.map(({ size, color, id }) => {
        return (
          <SixSidedDie
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
`;
