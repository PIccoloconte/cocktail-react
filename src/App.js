import { Navbar, Sidebar, Footer } from "./components";
import { Route, Routes, HashRouter } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";

function App() {
  return (
    <HashRouter className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contattaci" element={<ContactScreen />} />
        <Route path="/cocktail/:id" element={<SingleCocktailScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
