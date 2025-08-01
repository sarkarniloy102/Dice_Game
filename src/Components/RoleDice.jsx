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
                <img className="image" src={`/images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>

    );
};

export default RoleDice;

const DiceContainer = styled.div`
    margin-top: 28px;
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
    
     @media (max-width: 768px) {
        .image{
            width: 180px;
        }
         p{
        font-size: 18px;
        margin: 10px 0;
    }
     }
     
     @media (max-width: 480px) {
        .image{
            width: 90px;
        }
         p{
        font-size: 14px;
        margin: 10px 0;
    }
     }
`;