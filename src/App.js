import "./App.css";
import Axios from 'axios';
import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState();

  const getJoke = () => {
   Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
    console.log(response)
    setJokes(response.data.setup + " ... " + response.data.punchline)
   })
  }

  // const getJoke = () => {
  //   fetch("https://official-joke-api.appspot.com/random_joke").then(
  //     (response) =>
  //       response.json().then((data) => {
  //         setJokes(data.setup + " ... " + data.punchline);
  //         console.log(response);
  //       })
  //   );
  // };

  return (
    <div className="App">
      <h3>
        Random jokes <button onClick={getJoke}>new joke or you!</button>
      </h3>
      <p>{jokes}</p>
    </div>
  );
}

export default App;
