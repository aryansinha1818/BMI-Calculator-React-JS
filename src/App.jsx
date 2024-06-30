import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // logic
  let calcBmi = (e) => {
    // below prevents from having the default value sent when the form submit is clicked
    e.preventDefault();
    if (weight === 0 || height === 0) {
      toast("Please enter weight and height!");
    } else {
      let heightInMeters = height / 100;
      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      // bmi logic
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You have a healthy weight");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form action="" onSubmit={calcBmi}>
          <fieldset>
            <legend>Personal Details</legend>
            <label htmlFor="wt">Weight (kg) :</label>
            <input
              type="text"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label htmlFor="ht">Height (cm) :</label>
            <input
              type="text"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </fieldset>
          <div className="btn">
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
