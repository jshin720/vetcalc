import React from "react";

export default function ResultsPage(props) {
  const { weight } = props;

  let mbw = Math.pow(weight, 0.75);
  let rer = Math.round(mbw * 70);

  const conversionKey = {
    "MER 1.0": 1.0,
    "MER 1.2": 1.2,
    "MER 1.4": 1.4,
    "MER 1.6": 1.6,
    "MER 1.8": 1.8,
  };

  return (
    <div>
      <h1>Your Results</h1>
      <p>MBW: {Math.ceil(mbw * 100) / 100} Kg</p>
      <p>RER: {rer} Kg</p>
      <p>
        Conversion Key:{" "} <br/>
        {Object.entries(conversionKey).map(([key, value]) => (
          <span key={key}>
            {key}: {Math.round(rer * value)} Kg
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
