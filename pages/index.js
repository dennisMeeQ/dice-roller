import styled from 'styled-components';

import { DiceContainer, MaxWidthWrapper, Button } from '../components';

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
  return (
    <MaxWidthWrapper>
      <LayoutWrapper>
        <DiceContainer diceConfig={DEFAULT_CONFIG} />
        <ActionsLayout>
          <Button>Shake &apos;em!</Button>
        </ActionsLayout>
      </LayoutWrapper>
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
