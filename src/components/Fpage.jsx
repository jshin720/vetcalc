import React, { useState } from "react";

export default function FormPage(props) {
  const [weightType, setWeightType] = useState("");
  const { weight, setWeight, setConvertToggle } = props;

  // const handleConversion = (e) => {
  //   setWeightType(e.target.value)
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (weightType === "lb") setWeight(Math.round(weight * 0.45359237) * 100);
    setConvertToggle(true);
  };

  return (
    <div className="weight-form">
      <h1 className="form-heading">The Pet Calc</h1>
      <form onSubmit={handleSubmit} className="calc-form">
        <div className="input-container">
          <label className="form-label">Enter weight</label>
          <input
            type="number"
            placeholder="Enter Weight"
            defaultValue={weight === 0 ? null : weight}
            onChange={(e) => setWeight(e.target.value)}
            name="weight"
          />
        </div>
        <div className="select-box">
          <select
            name="weightType"
            defaultValue={weightType || "Select"}
            className="select-weight"
            id="weight-type"
            onChange={(e) => setWeightType(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="lb">lb</option>
            <option value="kg">kg</option>
          </select>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
