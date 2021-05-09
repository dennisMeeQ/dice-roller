import styled from 'styled-components';

import { Select } from '../Select';
import { IconButton } from '../IconButton';

import { AVAILABLE_DICE_COLORS } from '../../constants';

export function DiceChooser({
  id,
  size,
  color,
  setDiceConfig,
  removeDie,
  ...delegated
}) {
  return (
    <Wrapper {...delegated}>
      <Select
        label="Size"
        value={size}
        onChange={(ev) => {
          setDiceConfig({ id, color, size: ev.target.value });
        }}
      >
        <option value="small" id="small">
          Small
        </option>
        <option value="medium" id="medium">
          Medium
        </option>
        <option value="large" id="large">
          Large
        </option>
      </Select>
      <Select
        label="Color"
        value={color}
        onChange={(ev) => {
          setDiceConfig({ id, color: ev.target.value, size });
        }}
      >
        {Object.values(AVAILABLE_DICE_COLORS).map((c) => {
          return (
            <option value={c} key={c}>
              {c}
            </option>
          );
        })}
      </Select>
      <IconContainer>
        <IconButton icon="trash" size={24} onClick={() => removeDie(id)} />
      </IconContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: ${({ theme }) => theme.colors.gray300} 1px solid;
  border-radius: 4px;

  padding: 4px;
  margin: 4px 0;

  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
