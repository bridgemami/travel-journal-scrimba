import Header from "./components/header/Header";
import Travel from "./components/travel/Travel";
import data from "./data/data.json";
import "./App.css";

function App() {
  const travel = data.map((item) => {
    return <Travel key={item.id} {...item} />;
  });

  return (
    <>
      <Header />
      <main>{travel}</main>
    </>
  );
}

export default App;
