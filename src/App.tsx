import React, { useEffect, useState } from 'react';
import './App.css';
import LettersGrid from './components/LettersGrid';

export interface Step {
  step: number;
}

export default function App(): JSX.Element {

  const [step, setStep] = useState<Step>({step: 0});

  return (
    <div className="App">
      <h1>Memories Step {step.step} </h1>
      {console.log(`step: ${step.step}`)}
      <LettersGrid step={step} setStep={setStep}></LettersGrid>
    </div>
  );
}