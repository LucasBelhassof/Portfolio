import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Container from './components/Container';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Experience from './components/pages/Experience';

function App() {
  return (
    <Router>
          <Navbar />
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </Container>
          <Footer />
    </Router>
  );
}

export default App;
