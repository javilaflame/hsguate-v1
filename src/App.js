import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
