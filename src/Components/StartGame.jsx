import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div className="image">
                <img src="/images/dices.png" alt="" />
            </div>


            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>

            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0 auto;


    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }

     /*Responsive styling */
    @media (max-width: 768px) {
          
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        .image img {
            width: 300px;
        }

        .content h1 {
            font-size: 28px;
        }

        button {
            font-size: 14px;
            padding: 10px 10px;
        }
    }

    @media (max-width: 480px) {
        .content h1 {
            font-size: 20px;
        }

        .image img {
            width: 250px;
           
        }

        button {
            font-size: 12px;
            padding: 8px 10px;
        }
    }

`
