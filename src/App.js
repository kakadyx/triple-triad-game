import "./App.scss";
import Biography from "./pages/Biography";
import Main from "./pages/Main";
import Default from "./layouts/Default";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Main />}></Route>
        <Route path="characters/:id" element={<Biography />}></Route>
        <Route path="characters" element={<Characters />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
