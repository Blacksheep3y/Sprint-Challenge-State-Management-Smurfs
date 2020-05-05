import React, { useContext } from "react";
import { SmurfContext } from '../contexts/SmurfContext';

function Smurf() {
  const smurf = useContext(SmurfContext);

  return (
    <div className="newSmurf">
      <p>
        {smurf.lastName}, {smurf.firstName}
      </p>
    </div>
  );
}

export default Smurf;
