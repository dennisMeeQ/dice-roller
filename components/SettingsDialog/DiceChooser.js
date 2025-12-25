import styled from 'styled-components';

import { Select } from '../Select';
import { IconButton } from '../IconButton';

import { DICE_COLORS, DICE_SIZES, DICE_TYPES } from '../../constants';

export function DiceChooser({
  id,
  size,
  color,
  type = 'standard',
  setDiceConfig,
  removeDie,
  ...delegated
}) {
  return (
    <Wrapper {...delegated}>
      <ControlsGrid $hasColorPicker={type === 'standard'}>
        <Select
          label="Type"
          value={type}
          onChange={(ev) => {
            const newType = ev.target.value;
            const newColor = newType === 'catan' ? 'beige' : color;
            setDiceConfig({ id, color: newColor, size, type: newType });
          }}
        >
          {Object.values(DICE_TYPES).map((t) => {
            return (
              <option value={t.key} key={t.key}>
                {t.text}
              </option>
            );
          })}
        </Select>
        <Select
          label="Size"
          value={size}
          onChange={(ev) => {
            setDiceConfig({ id, color, size: ev.target.value, type });
          }}
        >
          {Object.values(DICE_SIZES).map((s) => {
            return (
              <option value={s.key} key={s.key}>
                {s.text}
              </option>
            );
          })}
        </Select>
        {type === 'standard' ? (
          <Select
            label="Color"
            value={color}
            onChange={(ev) => {
              setDiceConfig({ id, color: ev.target.value, size, type });
            }}
          >
            {Object.values(DICE_COLORS).map((c) => {
              return (
                <option value={c} key={c}>
                  {c}
                </option>
              );
            })}
          </Select>
        ) : (
          <Spacer />
        )}
      </ControlsGrid>
      <IconContainer>
        <IconButton icon="trash" size={24} onClick={() => removeDie(id)} />
      </IconContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: ${({ theme }) => theme.colors.gray300} 1px solid;
  border-radius: 4px;

  padding: 8px;
  margin: 4px 0;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$hasColorPicker ? '1fr 1fr 1fr' : '1fr 1fr 1fr'};
  gap: 8px;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Spacer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;
