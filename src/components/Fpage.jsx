import React, { useState } from "react";

export default function FormPage(props) {
  const [weightType, setWeightType] = useState("");
  const { weight, setWeight, convertToggle, setConvertToggle } = props;

  const handleConversion = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    console.log("wt",weightType);
  };

  return (
    <div>
      <h1>starting form</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter the weight</label>
        <input
          type="number"
          placeholder="Enter Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          name="weight"
        />
        <select
          name="weightType"
          defaultValue={weightType || "Select"}
          id="weight-type"
          // onChange={handleConversion}
        >
          <option value="Select">Select</option>
          <option value="lb" onChange={(e) => setWeightType(e.target.value)}>
            lb
          </option>
          <option value="kg" onChange={(e) => setWeightType(e.target.value)}>
            kg
          </option>
        </select>
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
