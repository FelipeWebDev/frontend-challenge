"use client"

import React, { useState } from 'react';

interface ButtonProps {
    selected: boolean;
    onClick: () => void;
    text: string
}

const Button: React.FC<ButtonProps> = ({selected, onClick, text}) => {
    return (
        <button className={selected ? "active" : ""} onClick={onClick}>
           {text}
        </button>
    )
}

export default function App () {
    const [selected, setSelected] = useState<null | number>(null);

    const handleButton = (buttonIndex: number) => {
        if (selected === buttonIndex) {
            setSelected(null)
        } else {
            setSelected(buttonIndex)
        }
    }

    return (
        <div>
            <Button selected={selected === 0} onClick={() => handleButton(0)} text={"1"}></Button>
            <Button selected={selected === 1} onClick={() => handleButton(1)} text={"2"}></Button>
            <Button selected={selected === 2} onClick={() => handleButton(2)} text={"3"}></Button>
        </div>
    )
}
