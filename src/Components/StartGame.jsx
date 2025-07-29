import styled from "styled-components";

const StartGame = () => {
    return (
        <Container>
            <img src="/public/images/dices.png" alt="" />

            <div>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;

`
const Button = styled.button`
    color: white;
    padding: 10px 18px;
   min-width: 220px;
    background: black;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`