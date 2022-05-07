import "./App.scss";
import Biography from "./pages/Biography";
import Main from "./pages/Main";
import Default from "./layouts/Default";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Main />}></Route>
        <Route path="bio/:id" element={<Biography />}></Route>
        <Route path="characters" element={<Characters />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
