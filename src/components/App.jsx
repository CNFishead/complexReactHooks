import React, { useState } from "react";

function App() {
  // Setup a useState complex state
  // Meaning the state is an object
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  //Setup a function to handle the event changes
  //of typing into the field inputs.
  function handleChange(event) {
    //create an object literal, set it equal to event.target
    //this will set the value to event.target.value
    //that comes from the input, likewise with name.
    const { value, name } = event.target;

    //Setup the function to change the Values
    //Pass "prevValue" this allows the function to get
    //the previous values in the object
    setFullName((prevValue) => {
      //conditional statements to see which field it came
      //from
      if (name === "fName") {
        //return a new object that passes both fields back
        //set the value of the changed field. keep old value in
        //the other.
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else {
        //lName field conditional
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      {/* H1, houses the variables of fName, and 
      lName, inital state "" */}
      <h1>
        Hello {fullName.fName}
        {fullName.lName}
      </h1>
      <form>
        {/* setup input fields, name, onChange, and value
        crucial to setup. */}
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        {/* Submit button, doesnt do anything */}
        <button>Submit</button>
      </form>
    </div>
  );
}

// export app to be used by index.js
export default App;
