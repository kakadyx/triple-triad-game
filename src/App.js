import "./App.scss";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Biography from "./pages/Biography";
import { useState } from "react";

import CardsBlock from "./components/CardsBlock";

function App() {
  const [currentCharID, setCurrentCharID] = useState(null);
  const onBioClick = (id) => {
    setCurrentCharID(id);
  };
  const onBackClick = () => {
    setCurrentCharID(null);
  };
  const content =
    currentCharID !== null ? (
      <Biography onBackClick={onBackClick} id={currentCharID} />
    ) : (
      <>
        <Slider />
        <CardsBlock onBioClick={onBioClick} />
        <Footer />
      </>
    );

  return (
    <div className="App">
      <Header />
      {content}
    </div>
  );
}

export default App;
