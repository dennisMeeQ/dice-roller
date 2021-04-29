import styled from 'styled-components';

export function Button({
  // style = 'filled',
  children,
  ...delegated
}) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border-radius: 4px;
  padding: 12px 16px;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  font-size: ${18 / 16}rem;

  border: 2px solid ${({ theme }) => theme.colors.primary.darker};
  color: ${({ theme }) => theme.colors.primary.text};
  background-color: ${({ theme }) => theme.colors.primary.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};

    cursor: pointer;
  }
`;
