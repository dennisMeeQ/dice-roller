import styled from 'styled-components';

export function MaxWidthWrapper({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 1024px;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
