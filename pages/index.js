import styled from 'styled-components';

import { useStickyState } from '../lib/useStickyState';

import {
  DiceContainer,
  MaxWidthWrapper,
  Button,
  SettingsDialog,
} from '../components';

import { AVAILABLE_DICE_COLORS as DICE_COLORS } from '../constants';

const DEFAULT_CONFIG = [
  { id: 1, size: 'medium', color: DICE_COLORS.black },
  { id: 2, size: 'medium', color: DICE_COLORS.red },
  { id: 3, size: 'medium', color: DICE_COLORS.green },
  { id: 4, size: 'medium', color: DICE_COLORS.yellow },
  { id: 5, size: 'medium', color: DICE_COLORS.green },
  { id: 6, size: 'medium', color: DICE_COLORS.black },
];

export default function Home() {
  const [settings, setSettings] = useStickyState(
    { dice: DEFAULT_CONFIG },
    'settings'
  );

  const onClick = () => {
    const diceRollEvent = new Event('dice:roll');

    document.dispatchEvent(diceRollEvent);
  };

  return (
    <MaxWidthWrapper>
      <LayoutWrapper>
        <DiceContainer diceConfig={settings.dice} />
        <ActionsLayout>
          <Button onClick={onClick}>Roll!</Button>
        </ActionsLayout>
      </LayoutWrapper>
      <SettingsDialog currentSettings={settings} setSettings={setSettings} />
    </MaxWidthWrapper>
  );
}

const LayoutWrapper = styled.div`
  /* padding: 64px 0; */

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ActionsLayout = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: center;
`;
