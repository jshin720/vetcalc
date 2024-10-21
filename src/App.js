import "./App.css";
import { useState } from "react";
import Formpage from "./components/Fpage";
import Resultspage from "./components/ResultsPage";

function App() {
  const [weight, setWeight] = useState(0);
  const [convertToggle, setConvertToggle] = useState(false);

  return (
    <>
    div
      {convertToggle === false ? 
        <Formpage
          weight={weight}
          setWeight={setWeight}
          convertToggle={convertToggle}
          setConvertToggle={setConvertToggle}
        />
      : < Resultspage weight={weight}/>
        
      }
    </>
  );
}

export default App;
