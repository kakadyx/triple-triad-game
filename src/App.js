import "./App.scss";
import Biography from "./pages/Biography";
import Main from "./pages/Main";
import Default from "./layouts/Default";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NoHeader from "./layouts/NoHeader";
import Login from "./pages/Login";
import { useEffect, useState, createContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { CHARACTERS } from "./assets/data/constants";

export const CharContext = createContext(null)

function App() {
  const location = useLocation();
	const [characters, setCharacters] = useState(JSON.parse(window.localStorage.getItem('characters')) || CHARACTERS)


		console.log()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);


  return (
		<CharContext.Provider value={[characters, setCharacters]}>
			<Routes>
				<Route path="/" element={<Default />}>
					<Route index element={<Main />}></Route>
					<Route path="characters/:id" element={<Biography />}></Route>
					<Route path="characters" element={<Characters />}></Route>
					<Route path="contacts" element={<Contacts />}></Route>
					<Route path="about" element={<About />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Route>
				<Route path="/login" element={<NoHeader />}>
					<Route path="" element={<Login />}/>
				</Route>
			</Routes>
		</CharContext.Provider>
  );
}

export default App;
