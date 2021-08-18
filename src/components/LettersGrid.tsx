import React, { useEffect, useState } from "react";
import "../styling/LettersGrid.css";
import { shuffleArray } from "./ShuffleArray";

export default function LettersGrid(): JSX.Element {

    const lettersListOrdered = ["M", "E", "O", "R", "I", "S",
        "E", "M", "O", "S", "I", "R"];

    const [first, setFirst] = useState<number>(-1);
    const [second, setSecond] = useState<number>(-1);
    const [out, setOut] = useState<number[]>([-1]);
    const [lettersList, setLettersList] = useState<string[]>([""]);

    function handleClick(index: number) {
        if (!out.includes(index)) {
            if (first === -1) {
                setFirst(index);
            }
            else if (second === -1 && index !== first) {
                setSecond(index);
            }
            else if (second === index || first === index) {
                setFirst(-1);
                setSecond(-1);
            }
            else {
                setFirst(index);
                setSecond(-1);
            }
        }
    }

    useEffect(() => {
        setLettersList (shuffleArray(lettersListOrdered));
    }, []);

    useEffect(() => {
        if (first !== -1 && second !== -1) {
            if (lettersList[first] === lettersList[second]) {
                setOut(out.concat([first, second]))
            }
        }
    }, [first, second])

    const letters = lettersList.map((l, index) =>
        <div className={out.includes(index) ? "out" : first === index || second === index ? "letter" : "letter-closed"} key={index}
            onClick={() => handleClick(index)}>{l}</div>);

    return (
        <div className="letters">
            {letters}
        </div>

    );
}
