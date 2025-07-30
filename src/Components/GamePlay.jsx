import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = ({ toggle }) => {
    // for number selector
    const [selectNumber, setSelectNumber] = useState();
    // for role dice
    const [currentDice, setCurrentDice] = useState(4);

    // for total score 
    const [score, setScore] = useState(0);

    // for show rules
    const [showRules, setShowRules] = useState(false);



    // random number generate
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () => {

        if (!selectNumber) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                // icon: "error",
                title: "You haven't selected any number"

            });
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(() => randomNumber);

        if (selectNumber === randomNumber)
            setScore((prev) => prev + randomNumber);
        else
            setScore((prev) => prev - 2);

        setSelectNumber(undefined);
    }

    // to reset total score
    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score}></TotalScore>
                <NumberSelector selectNumber={selectNumber} setSelectNumber={setSelectNumber}></NumberSelector>
            </div>

            <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice>
            <div className="btns">
                <OutlineButton onClick={() => resetScore()}>Reset</OutlineButton>
                <OutlineButton onClick={toggle}>Back Home</OutlineButton>
                <Button
                    onClick={() => setShowRules(prev => !prev)}
                >{showRules ? "Hide" : "Show Rules"}</Button>

            </div>

            {showRules && <Rules></Rules>}



        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.div`
padding: 25px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin: 10px 0;
    }

    /* responsive styling */

     @media (max-width: 768px) {
        .top_section{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
         }
    }
     
        @media (max-width: 480px) {
        .top_section{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
         }
    }

    
`