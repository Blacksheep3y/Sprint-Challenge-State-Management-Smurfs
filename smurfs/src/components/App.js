// DEPENDENCIES IMPORT
import React, { useState, useEffect } from "react";
import axios from "axios";

// FILES IMPORT
import Smurf from './Smurf';
  // CONTEXT FILE
import { SmurfContext } from '../contexts/SmurfContext';

// CSS IMPORT
import "./App.css";

function App() {
  // useState = The useState hook holds and sets user state.
  const [smurfs, setSmurfs] = useState();

  // useEffect = The useEffect hook performs a pseudo API call that sets “my user” to state.
  useEffect(() => {
    // axios call starts here
    axios
      //we do our '.get' first to grab our api
      .get("http://localhost:3333/smurfs")
      //then we do our '.then' to get our response from the api
      .then((res) => {
        console.log("response from our axios call (specifically the data within the response): ", res.data);
        //we must set our state from our Smurf useState to the data we fetched in our axios call, that way we can access it later
        setSmurfs(res.data);
      })
      //we use a '.catch', just in case our call runs into an error and we can return that error
      .catch((err) => {
        console.log("error: ", err);
      });
  }, //within a useEffect hook we must have this empty array (This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.)
  []);

    // lets see if our data returns correctly by doing a console.log for our 'smurfs':
    console.log("smurfs ", smurfs);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurf />
      </div>
    );
  }

export default App;
// MATTHEW CASTILLO