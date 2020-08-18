import React from 'react';
import './App.css';
import Header from './components/Header';
import Books from './components/Books'
import SearchBar from './components/SearchBar';
import Body from './components/Body';


function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <SearchBar />
      <Body />
    </div>
  );
}

export default App;
