import styled from "styled-components";

const NumberSelector = ({ selectNumber, setSelectNumber }) => {

    const Box_array = [1, 2, 3, 4, 5, 6];
    //  const [selectNumber, setSelectNumber] = useState();

    return (
        <NumberSelectorContainer>
            <div class="flex">
                {
                    Box_array.map((value, idx) =>
                    (<Box
                        isSelected={value === selectNumber}
                        key={idx}
                        onClick={() => setSelectNumber(value)}
                    >
                        {value}</Box>)
                    )
                }

            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>

    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        display: flex;
        justify-content: end;
        
    }

    /* responsive styling */
     @media (max-width: 768px){
     p{
        font-size: 18px;
        font-weight: 700;
        display: flex;
        justify-content: end;
        
       }
     }
      
        @media (max-width: 480px){
     p{
        font-size: 13px;
        font-weight: 700;
        display: flex;
        justify-content: end;
        
       }
        }
`

const Box = styled.div`
    height: 62px;
    width: 62px;
    border: 1px solid black;
    display: grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "black" : ' white'};
    color: ${(props) => props.isSelected ? "white" : "black"};


/* responsive styling */
     @media (max-width: 768px) {
       height:42px;
       width: 42px;
       font-size: 18px;

  
    }

     @media (max-width: 480px) {
       height:22px;
       width: 22px;
       font-size: 12px;

   
    }
`
