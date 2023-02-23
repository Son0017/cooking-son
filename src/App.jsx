import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
// components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="max-w-screen-lg mx-auto px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
