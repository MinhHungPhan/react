import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

const pizzaData = {
  name: "Delicious Spinach Pizza",
  ingredients: "spinach, mozzarella, tomatoes"
};

function Pizza() {
  return (
    <div>
      <h2>{pizzaData.name}</h2>
      <p>{pizzaData.ingredients}</p>
      <img src="spinaci.jpg" alt={pizzaData.name} />
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
