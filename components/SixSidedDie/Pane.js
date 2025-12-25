import styled from 'styled-components';

const mapDotArrangement = ({ upper, middle, lower }) => {
  return {
    1: [{ top: middle, left: middle }],
    2: [
      { top: upper, left: upper },
      { top: lower, left: lower },
    ],
    3: [
      { top: upper, left: upper },
      { top: middle, left: middle },
      { top: lower, left: lower },
    ],
    4: [
      { top: upper, left: upper },
      { top: upper, left: lower },
      { top: lower, left: upper },
      { top: lower, left: lower },
    ],
    5: [
      { top: upper, left: upper },
      { top: upper, left: lower },
      { top: middle, left: middle },
      { top: lower, left: upper },
      { top: lower, left: lower },
    ],
    6: [
      { top: upper, left: upper },
      { top: upper, left: middle },
      { top: upper, left: lower },
      { top: lower, left: upper },
      { top: lower, left: middle },
      { top: lower, left: lower },
    ],
  };
};

const getDotPositions = ({ paneSize, dotSize, number }) => {
  const upper = `${(45 * paneSize) / 200}px`;
  const middle = `${(paneSize - dotSize) / 2}px`;
  const lower = `${(125 * paneSize) / 200}px`;

  return mapDotArrangement({ upper, middle, lower })[number];
};

const size2Transform = (size) => {
  const halfSize = size / 2;
  return {
    front: {
      transform: `translateZ(${halfSize}px)`,
    },
    back: {
      transform: `rotateX(-180deg) translateZ(${halfSize}px)`,
    },
    right: {
      transform: `rotateY(90deg) translateZ(${halfSize}px)`,
    },
    left: {
      transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
    },
    top: {
      transform: `rotateX(90deg) translateZ(${halfSize}px)`,
    },
    bottom: {
      transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
    },
  };
};

const getTransform = ({ side, paneSize }) => {
  const transform = size2Transform(paneSize);
  const sideStyle = transform[side];
  if (!sideStyle) {
    console.warn(`Incorrect parameter for Pane: side=${side}`);
  }

  return sideStyle;
};

export function Pane({ side, number, sizes, colors }) {
  const { width: paneSize, dots: dotSize } = sizes;

  const dots = getDotPositions({ paneSize, dotSize, number });
  if (!dots) {
    console.warn(`Incorrect parameter for Pane: number=${number}`);
  }

  const sideStyle = getTransform({ side, paneSize });

  return (
    <Wrapper
      $transform={sideStyle.transform}
      $paneSize={paneSize}
      $paneColor={colors.body}
      $borderColor={colors.border}
    >
      {dots.map((position) => (
        <Dot
          $top={position.top}
          $left={position.left}
          $size={dotSize}
          $dotColor={colors.dots}
          key={position.top + position.left}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.$paneColor};
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.$paneSize}px;
  height: ${(props) => props.$paneSize}px;
  border: 2px solid ${(props) => props.$borderColor};

  font-family: Arial, Helvetica, sans-serif;
  font-size: 500%;
  text-align: center;

  transform: ${(props) => props.$transform};
  -webkit-transform: ${(props) => props.$transform};

  /* Chrome fix: prevent face bleeding */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  pointer-events: auto;
`;

const Dot = styled.span`
  display: block;
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: ${(props) => props.$dotColor};
  border-radius: 50%;
  /* box-shadow: inset 0px 1px 7px 2px hsl(0deg 0% 70%); */

  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
`;
