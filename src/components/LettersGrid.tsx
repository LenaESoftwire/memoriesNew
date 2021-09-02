import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../styling/LettersGrid.css";
import { shuffleArray } from "./ShuffleArray";
import { Step } from "../App"

interface LetterGridProps {
    step: Step;
    setStep: Dispatch<SetStateAction<Step>>;
}

export default function LettersGrid({ step, setStep }: LetterGridProps): JSX.Element {

    const lettersListOrdered = ["M", "E", "O", "R", "I", "S",
        "E", "M", "O", "S", "I", "R", "G", "G", "A", "A", "L", "L", "Y", "Y"];

    const [first, setFirst] = useState<number>(-1);
    const [second, setSecond] = useState<number>(-1);
    const [out, setOut] = useState<number[]>([-1]);
    const [lettersList] = useState<string[]>(shuffleArray(lettersListOrdered));
    const [player, setPlayer] = useState<number>(-1);
    const [score1, setScore1] = useState<number>(0);
    const [score2, setScore2] = useState<number>(0);

    function handleClick(index: number) {
        if (!out.includes(index)) {
            if (first === -1) {
                setFirst(index);
            }
            else if (second === -1 && index !== first) {
                setSecond(index);
                setStep({ step: step.step++ });
                { console.log(`that step: ${step.step}`) }
            }
            else if (second === index || first === index) {
                setFirst(-1);
                setSecond(-1);
            }
            else {
                setFirst(index);
                setSecond(-1);
                setStep({ step: step.step++ });
                { console.log(`this step: ${step.step}`) }
            }
        }
    }

    // useEffect(() => {
    //     setLettersList (shuffleArray(lettersListOrdered));
    // }, []);

    useEffect(() => {
        if (first !== -1 && second !== -1) {
            if (lettersList[first] === lettersList[second]) {
                setOut(out.concat([first, second]));
                if (player === -1) {
                    setScore1(score1+1);
                }
                else {
                    setScore2(score2+1);
                }
            }
            else {
                setPlayer(-player);
            }
        }
    }, [first, second])

    const letters = lettersList.map((l, index) =>
        <div className={out.includes(index) ? "out" : first === index || second === index ? "letter" : "letter-closed"} key={index}
            onClick={() => handleClick(index)}>{l}</div>);

    return (
        <div className="game">
            <div className="players">
                <div className={player === -1 ? "active" :"player"}>Player1 {score1} </div>
                <div className={player === 1 ? "active" :"player"}>Player2 {score2} </div>
            </div>
            <div className="letters">
                {letters}
            </div>
        </div>

    );
}
