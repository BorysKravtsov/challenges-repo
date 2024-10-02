import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Click me0</Button>
      <Button>Click me1</Button>
      <Button>Click me2</Button>
      <Button>Click me3</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
