import styled from 'styled-components';
import { Settings } from 'react-feather';

const ICONS = {
  settings: Settings,
};

export function IconButton({ icon }) {
  const Icon = ICONS[icon];

  return (
    <Wrapper>
      <Button>
        <Icon size={32} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 32px;
  height: 32px;

  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const Button = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
`;
