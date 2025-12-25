import styled from 'styled-components';

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

export function Pane({ side, symbol, sizes, colors }) {
  const { width: paneSize } = sizes;

  const sideStyle = getTransform({ side, paneSize });

  return (
    <Wrapper
      $transform={sideStyle.transform}
      $paneSize={paneSize}
      $paneColor={colors.body}
      $borderColor={colors.border}
    >
      {symbol === 'pirate' && <PirateShip $size={paneSize} />}
      {symbol === 'city-green' && <City $size={paneSize} $color="#2d5016" />}
      {symbol === 'city-blue' && <City $size={paneSize} $color="#1e3a8a" />}
      {symbol === 'city-yellow' && <City $size={paneSize} $color="#ca8a04" />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.$paneColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.$paneSize}px;
  height: ${(props) => props.$paneSize}px;
  border: 2px solid ${(props) => props.$borderColor};

  transform: ${(props) => props.$transform};
  -webkit-transform: ${(props) => props.$transform};

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  pointer-events: auto;
`;

const PirateShip = styled.div`
  width: ${(props) => props.$size * 0.6}px;
  height: ${(props) => props.$size * 0.6}px;
  background: #000;
  clip-path: polygon(
    /* Taller mast */ 35% 2%,
    40% 2%,
    40% 58%,
    /* Larger triangular sail */ 40% 10%,
    88% 52%,
    40% 55%,
    /* Hull connection */ 40% 64%,
    /* Bow rises */ 88% 62%,
    100% 55%,
    98% 70%,
    88% 85%,
    /* Bottom */ 50% 100%,
    /* Stern rises */ 12% 85%,
    2% 70%,
    0% 55%,
    12% 62%,
    35% 64%,
    35% 2%
  );
`;

const City = styled.div`
  width: ${(props) => props.$size * 0.5}px;
  height: ${(props) => props.$size * 0.55}px;
  background: ${(props) => props.$color};
  clip-path: polygon(
    /* Left wing */ 0% 100%,
    0% 60%,
    8% 60%,
    8% 48%,
    15% 48%,
    15% 60%,
    22% 60%,
    22% 100%,
    /* Center building with spire */ 26% 100%,
    26% 50%,
    32% 50%,
    32% 35%,
    40% 35%,
    40% 20%,
    48% 0%,
    52% 0%,
    60% 20%,
    60% 35%,
    68% 35%,
    68% 50%,
    74% 50%,
    74% 100%,
    /* Right wing */ 78% 100%,
    78% 60%,
    85% 60%,
    85% 48%,
    92% 48%,
    92% 60%,
    100% 60%,
    100% 100%
  );
`;
