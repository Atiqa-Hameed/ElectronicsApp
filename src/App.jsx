import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/pages/Home"
import Contact from './components/pages/Contact';
import About from './components/pages/About'; 
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

