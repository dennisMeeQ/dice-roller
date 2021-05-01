import styled from 'styled-components';

import { DiceContainer, MaxWidthWrapper, Button } from '../components';
import { IconButton } from '../components/IconButton/IconButton';

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
  const onClick = () => {
    const diceRollEvent = new Event('dice:roll');

    document.dispatchEvent(diceRollEvent);
  };

  return (
    <MaxWidthWrapper>
      <LayoutWrapper>
        <DiceContainer diceConfig={DEFAULT_CONFIG} />
        <ActionsLayout>
          <Button onClick={onClick}>Shake &apos;em!</Button>
        </ActionsLayout>
      </LayoutWrapper>
      <IconButton icon="settings" />
    </MaxWidthWrapper>
  );
}

const LayoutWrapper = styled.div`
  padding: 64px 0;
`;

const ActionsLayout = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: center;
`;
