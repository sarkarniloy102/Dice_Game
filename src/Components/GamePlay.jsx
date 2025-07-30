import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";

const GamePlay = () => {
    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore></TotalScore>
                <NumberSelector></NumberSelector>
            </div>

            <RoleDice></RoleDice>

        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.div`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`