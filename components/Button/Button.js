import styled from 'styled-components';

export function Button({
  // style = 'filled',
  children,
  ...delegated
}) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  font-family: inherit;

  border-radius: 4px;
  padding: 12px 24px;

  box-shadow: hsl(240deg 30% 28% / 25%) 0px 2px 5px -1px,
    hsl(0deg 0% 0% / 30%) 0px 1px 3px -1px;

  font-size: ${18 / 16}rem;

  border: 2px solid ${({ theme }) => theme.colors.primary.darker};
  color: ${({ theme }) => theme.colors.primary.text};
  background-color: ${({ theme }) => theme.colors.primary.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};

    cursor: pointer;
  }
`;
