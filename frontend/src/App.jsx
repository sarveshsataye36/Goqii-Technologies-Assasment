import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Add } from './Pages/Home/Add';
import { List } from './Pages/List/List';
import 'notyf/notyf.min.css';
import { Edit } from './Pages/Home/Edit';

function App() {

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Add/>} />    
        <Route path="/list" element={<List/>} />
        <Route path='/edit-user/:id' element={<Edit />} />
      </Routes>
    <Footer />
    </Router>
  )
}

export default App
