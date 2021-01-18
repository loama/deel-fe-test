import "./App.css";

const options = [
  {
    id: 1,
    value: "apple",
  },
  {
    id: 2,
    value: "pear",
  },
];

const listItems = options.map((option) => <li>{option.value}</li>);

function App() {
  return (
    <div className="App">
      <input type="text" />
      <div className="options">{listItems}</div>
    </div>
  );
}

export default App;
