import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Contents from './components/Contents.jsx';

const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Contents />
      <Footer />
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
