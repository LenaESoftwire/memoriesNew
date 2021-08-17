import React from 'react';
import './App.css';
import LettersGrid from './components/LettersGrid';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Memories</h1>
      <LettersGrid></LettersGrid>
    </div>
  );
}