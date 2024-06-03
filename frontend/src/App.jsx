import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Add } from './Pages/Home/Add';
import { List } from './Pages/List/List';

function App() {

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Add/>} />    
        <Route path="/list" element={<List/>} />
      </Routes>
    <Footer />
    </Router>
  )
}

export default App
