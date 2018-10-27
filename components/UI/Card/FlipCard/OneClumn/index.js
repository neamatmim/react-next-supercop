import React from 'react';

import styled, { css } from 'styled-components';

const flipCard = props => (
  <Card onClick={props.handleToggle}>
    <CardFront>
      <CardTitle>Card</CardTitle>
    </CardFront>

    <CardBack>
      <CardDescription>
        Rand's stated goal for writing the novel was "to show how desperately
        the world needs prime movers and how viciously it treats them" and to
        portray "what happens to the world without them".
      </CardDescription>
    </CardBack>
  </Card>
);
// Flipping card
const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: ${remy(380)};
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15);
  }

  &.flipped {
    & > div:first-of-type {
      // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

// Card sides
const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: ${remy(24)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
`;

// Card side - front
const CardFront = styled.div`
  ${CardSide};

  font-weight: bold;
  text-align: center;
`;

// Card side - back
const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`;

// Card content

const CardTitle = styled.h2`
  font-size: ${remy(21)};
`;

const CardDescription = styled.span`
  font-size: ${remy(16)};
`;

export default flipCard;
