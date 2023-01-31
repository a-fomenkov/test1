import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contacts from './pages/contacts/Contacts';
import ProjectHome from './pages/projectHome/ProjectHome';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projectHome/:id' element={<ProjectHome />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
