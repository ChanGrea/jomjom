import React from 'react';
import Button from './atoms/Button.jsx';
import DropBox from './atoms/DropBox.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
    <Wrapper>
      <DropBox data={languageOption} />
      <Button color="white" background="red" onClick={handleLoginButton}>
        로그인
      </Button>
    </Wrapper>
  );
};

export default Header;
