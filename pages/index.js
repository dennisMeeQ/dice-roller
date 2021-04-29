import styled from 'styled-components';

import { SixSidedDie } from '../components/SixSidedDie';

export default function Home() {
  return (
    <Wrapper>
      {/* <SixSidedDie size="small" color="green" />
      <SixSidedDie size="medium" color="black" />
    <SixSidedDie size="large" color="yellow" /> */}
      <SixSidedDie size="medium" color="black" />
      <SixSidedDie size="medium" color="red" />
      <SixSidedDie size="medium" color="green" />
      <SixSidedDie size="medium" color="yellow" />
      <SixSidedDie size="medium" color="red" />
      <SixSidedDie size="medium" color="green" />
      <SixSidedDie size="medium" color="green" />
      <SixSidedDie size="medium" color="green" />
      <SixSidedDie size="medium" color="green" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  padding: 200px 50px 0;
`;
