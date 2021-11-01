import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin-bottom: 16px;
  display: inline-block;
  min-width: 100 px;
  width: 25%;
  padding-right: 12 px;
  vertical-align: top;
`;

const FooterLink = styled.a`
  color: #757575;
`;

const FooterLinkItem = ({ children }) => {
  return (
    <Wrapper>
      <FooterLink as="a" href="#">
        {children}
      </FooterLink>
    </Wrapper>
  );
};

export default FooterLinkItem;
