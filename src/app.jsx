import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Header />
      <Footer />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
