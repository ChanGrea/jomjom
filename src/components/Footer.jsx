import React from 'react';
import styled from 'styled-components';
import FooterLinkItem from './atoms/FooterLinkItem.jsx';

const Wrapper = styled.div`
  min-width: 190 px;
  width: 100%;
  margin-top: 80 px;
  padding-bottom: 20 px;
  font-size: 1em;
  color: #757575;
  position: relative;
`;

const FooterTop = styled.p`
  padding: 0;
  margin: 0 0 30 px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterTop>
        질문이 있으신가요? 문의 전화:{' '}
        <FooterLinkItem>080-001-9587</FooterLinkItem>
      </FooterTop>
      <FooterLinkItem>자주 묻는 질문</FooterLinkItem>
      <FooterLinkItem>고객 센터</FooterLinkItem>
      <FooterLinkItem>계정</FooterLinkItem>
      <FooterLinkItem>미디어 센터</FooterLinkItem>
      <FooterLinkItem>투자 정보(IR)</FooterLinkItem>
      <FooterLinkItem>입사 정보</FooterLinkItem>
      <FooterLinkItem>넷플릭스 지원 디바이스</FooterLinkItem>
      <FooterLinkItem>이용 약관</FooterLinkItem>
      <FooterLinkItem>개인 정보</FooterLinkItem>
      <FooterLinkItem>쿠키 설정</FooterLinkItem>
      <FooterLinkItem>회사 정보</FooterLinkItem>
      <FooterLinkItem>문의하기</FooterLinkItem>
      <FooterLinkItem>속도 테스트</FooterLinkItem>
      <FooterLinkItem>법적 고지</FooterLinkItem>
      <FooterLinkItem>오직 넷플릭스에서</FooterLinkItem>
    </Wrapper>
  );
};

export default Footer;
