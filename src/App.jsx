import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
          <Link to="/" className="text-2xl font-bold text-purple-400">R O D</Link>
          {/* <div className="flex gap-6">
            <a href="#jogos" className="hover:text-purple-300">Meus Jogos</a>
            <a href="#stats" className="hover:text-purple-300">Status</a>
            <a href="#contato" className="hover:text-purple-300">Contato</a>
          </div> */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
