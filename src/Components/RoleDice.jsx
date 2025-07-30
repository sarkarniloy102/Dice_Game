import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {

    // const [currentDice, setCurrentDice] = useState(4);

    // const generateRandomNumber = (min, max) => {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }

    // const roleDice = () => {
    //     const randomNumber = generateRandomNumber(1, 7);
    //     setCurrentDice(() => randomNumber);
    // }

    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="" />
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
        margin: 10px 0;
    }
    .dice{
        cursor: pointer;
    }
`;