import React from 'react';
import Button from './atoms/Button.jsx';
import DropBox from './atoms/DropBox.jsx';
import styled from 'styled-components';
import Logo from './atoms/Logo.jsx';

const HeaderWrapper = styled.div`
  background-color: transparent;
  -webkit-transition: background-color 0.5s;
  -o-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  transition: background-color 0.5s;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4rem;
  z-index: 10;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0 3.5rem;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row nowrap;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding-top: 0.5rem;
  height: auto;
`;

const languageOption = [
  { key: 0, value: '한국어' },
  { key: 1, value: '영어(English)' },
];

const Header = () => {
  const handleLoginButton = e => {
    console.log('loginButton Clicked', e);
  };
  return (
    <HeaderWrapper>
      <Wrapper>
        <Logo />
        <DropBox data={languageOption} />
        <Button color="white" background="red" onClick={handleLoginButton}>
          로그인
        </Button>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
