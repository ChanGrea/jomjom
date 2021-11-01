import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border-bottom: 8px solid #222;
  padding: 70px 45px;
  margin-bottom: 0;
  background: 0 0;
  color: #fff;
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
