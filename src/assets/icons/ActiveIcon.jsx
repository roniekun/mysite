import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Southeast } from './svg/southeast.svg';

const StyledDiv = styled.div`
  .icon__active {
    align-self: center;
    width: 20px;
    transition: fill 0.3s ease;

    svg {
      fill: yellow;
      height: 20px;
      width: 20px;
      stroke-width: 5px;
      transition: transform 0.3s ease;
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
`;

const ActiveIcon = () => {
  return (
    <StyledDiv>
      <div className="icon__active">
        <Southeast />
      </div>
    </StyledDiv>
  );
};

export default ActiveIcon;
