import React from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';

import { getDisplayedValue } from './Select.helpers';

export function Select({ value, onChange, children }) {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': `${24}px` }}>
          <ChevronDown strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  color: ${({ theme }) => theme.colors.gray700};
  background-color: ${({ theme }) => theme.colors.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 8px 12px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
