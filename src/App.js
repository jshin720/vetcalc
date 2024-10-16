import "./App.css";
import { useState } from "react";
import Formpage from "./components/Fpage";
import Resultspage from "./components/ResultsPage";

function App() {
  const [weight, setWeight] = useState(0);
  const [convertToggle, setConvertToggle] = useState(false);

  return (
    <>
      <Formpage
        weight={weight}
        setWeight={setWeight}
        convertToggle={convertToggle}
        setConvertToggle={setConvertToggle}
      />
      <h1>
        {weight}
      </h1>
    </>
  );
}

export default App;
