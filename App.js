import "./styles.css";
import { useEffect, useState } from "react"; //the brain of react

// import { Card } from "./Card";

function Card({ name }) {
  const [count, setCount] = useState(0);
  const [hasLiked, sethasLiked] = useState(false); //false acts as a default value for state variable

  useEffect(() => {
    console.log(`${name} has been liked: ${hasLiked}`);
  });
  return (
    <div className="card-container" onClick={() => setCount(count + 1)}>
      <h2> {name} </h2>
      <button
        onClick={() =>
          sethasLiked(
            !(
              /* not operator : if the value is false it will invert true*/ hasLiked
            )
          )
        }
      >
        {" "}
        {/*hasLiked ? "❤️" : "🤍"*/}
        {hasLiked ? "❤️" : "Like 🤍"}{" "}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>My WatchList</h2>

      <Card name="3 Idiots" />
      <Card name="Lagaan" />
      <Card name="Saiyaara" />
      <Card name="Mission Impossible - Foulout" />
      <Card name="Pursuit of Happyness" />
      <Card name="Mission Mangal" />
    </div>
  );
}
//https://codesandbox.io/p/sandbox/react-intro-forked-8zncm2?file=%2Fsrc%2FCard.js%3A21%2C4
export default App;
