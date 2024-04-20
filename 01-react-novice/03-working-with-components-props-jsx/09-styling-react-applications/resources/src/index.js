import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry, we're closed!");

  return <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>;
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
