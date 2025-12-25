import styled from 'styled-components';
import { PlusCircle, Settings, Trash2, X } from 'react-feather';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

const ICONS = {
  settings: Settings,
  trash: Trash2,
  add: PlusCircle,
  close: X,
};

export function IconButton({
  icon,
  children,
  label,
  size = 32,
  // color = 'primary',
  ...delegated
}) {
  const Icon = ICONS[icon];

  return (
    <Wrapper style={{ '--size': `${size}px` }}>
      <Button {...delegated}>
        <Icon size={size} />
        <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
        {children}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
`;

const Button = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
