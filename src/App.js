import "./App.scss";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import CardsBlock from "./components/CardsBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <CardsBlock />
      <Footer />
    </div>
  );
}

export default App;
