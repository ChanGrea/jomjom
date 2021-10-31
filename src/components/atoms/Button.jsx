import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${props => props.color || 'black'};
  background: ${props => props.background || 'white'};
`;

const Button = ({ children, color, background, onClick }) => {
  return (
    <StyledButton color={color} background={background} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
