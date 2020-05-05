// DEPENDENCIES IMPORT
import React, { useContext, useState } from "react";
import axios from "axios";

  // CONTEXT FILE IMPORT
import { SmurfContext } from '../contexts/SmurfContext';

// Consuming the data passed into the provider is the final step for using the Context API. 
// We will use a context hook for this, though keep in mind that you can use render props as well.
function Smurf() {
  const smurf = useContext(SmurfContext);
  console.log('smurf: ', smurf);

  // We know we are gonna need empty data with name/age/height as a requirement for our Smurf, and eventually also a way to assign an id for each Smurf
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  // If we are creating smurfs we will need a handlechange for the values we are typing into our inputs
  const handleChanges = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
    console.log("Our newSmurf: ", newSmurf);
  };

  // We also need a handleSubmit for pushing new Smurf data into our previous state within axios
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => smurf.smurfs.push("/"))
      .catch((err) => console.log(err))
      .finally(() => window.location.reload());
  };

  return (
    <div className="newSmurf">
    {/* OUR SMURFS FORM */}
    <form onSubmit={handleSubmit}>
        Name: <br />
        <input
          type="text"
          name="name"
          value={newSmurf.value}
          onChange={handleChanges}
        />
        <br />
        Age: <br />
        <input
          type="text"
          name="age"
          value={newSmurf.value}
          onChange={handleChanges}
        />
        <br />
        Height: <br />{" "}
        <input
          type="text"
          name="height"
          value={newSmurf.value}
          onChange={handleChanges}
        />
        <br />
        <button type="submit">Add Smurf</button>
      </form>

      {/* ALL OF OUR NEWLY CREATED SMURFS AND SMURFS DISPLAYED */}
      <div>
        {smurf.smurfs
        ? smurf.smurfs.map((smurf) => (
            <div className="DisplaySmurf" key={smurf.id}>
                <p>Name: {smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
            </div>
            ))
            : "Smurfs Created"}
      </div>

    </div>
  );
}

export default Smurf;
