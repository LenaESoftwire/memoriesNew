import React, { useState } from "react";
import "../styling/LettersGrid.css";

export default function LettersGrid(): JSX.Element {
    const lettersList = ["M", "E", "O", "R", "I", "S", 
                        "E", "M", "O", "S", "I", "R"];
    
    const[chosen, setChosen] = useState<number>();

    const letters = lettersList.map((l, index) =>
        <div className={chosen === index ? "letter" : "letter-closed"} key={index}
        onClick={() => setChosen(index)}>{l}</div>);

    // const 

    return (
        <div className="letters">
            {letters}
        </div>

    );
}