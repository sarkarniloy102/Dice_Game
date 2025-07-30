import { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {

    const [currentDice, setCurrentDice] = useState();

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <DiceContainer>
            <div className="dice" onClick={() => generateRandomNumber(1, 7)}>
                <img src="/public/images/dice_1.png" alt="" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>

    );
};

export default RoleDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
    }
`;