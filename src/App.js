import './App.css';
import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Contents from 'components/Contents';

function App() {
  return (
    <div className="App">
      <Contents />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
