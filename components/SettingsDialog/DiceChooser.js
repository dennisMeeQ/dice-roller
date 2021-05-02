import styled from 'styled-components';
import { Trash2 } from 'react-feather';

import { Select } from '../Select';

import { AVAILABLE_DICE_COLORS } from '../../constants';

export function DiceChooser({ id, size, color, setDiceConfig, removeDie }) {
  return (
    <Wrapper>
      <Select
        label="Size"
        value={size}
        onChange={(ev) => {
          setDiceConfig({ id, color, size: ev.target.value });
        }}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </Select>
      <Select
        label="Color"
        value={color}
        onChange={(ev) => {
          setDiceConfig({ id, color: ev.target.value, size });
        }}
      >
        {Object.values(AVAILABLE_DICE_COLORS).map((c) => {
          return <option value={c}>{c}</option>;
        })}
      </Select>
      <IconContainer onClick={() => removeDie(id)}>
        <Trash2 size={24} />
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

  cursor: pointer;

  color: ${({ theme }) => theme.colors.secondary.dark};
`;
