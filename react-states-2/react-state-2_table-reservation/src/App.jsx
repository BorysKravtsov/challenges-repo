import Counter from "./components/Counter";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handlePeople(check) {
    if (check === true && people >= 0) setPeople(people + 1);
    else if (people > 0) setPeople(people - 1);
    console.log(people);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter handlePeople={handlePeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
