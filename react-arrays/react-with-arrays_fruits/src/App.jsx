import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1340,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 1341,
      name: "🍉 Watermelon",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Card cardColor={"card--" + fruit.color} name={fruit.name} />
        </li>
      ))}
    </div>
  );
}
