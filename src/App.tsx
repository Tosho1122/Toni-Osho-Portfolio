import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import GameDev from './pages/GameDev';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        {/*Header */}
        <Header />

        {/*Body Section */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gamedev" element={<GameDev />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

         {/*Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
