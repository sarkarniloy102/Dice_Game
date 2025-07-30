import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";

function App() {

  // Homepage to Gameplay page
  const [isGameStarted, setIsGameStarted] = useState(false);



  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {
        isGameStarted ? <GamePlay toggle={toggleGamePlay}></GamePlay> : <StartGame
          toggle={toggleGamePlay}></StartGame>
      }

    </>
  )
}

export default App
