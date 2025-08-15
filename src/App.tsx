import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import GameDev from './pages/GameDev';
import FullStackDevelopment from './pages/FullStackDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import AllProjects from './pages/AllProjects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        
        {/*Header */}
        <Header />

        {/*Body Section */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gamedev" element={<GameDev />} />
            <Route path="/fullstack" element={<FullStackDevelopment />} />
            <Route path="/software" element={<SoftwareDevelopment />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

         {/*Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
