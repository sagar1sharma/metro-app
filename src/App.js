import './App.css';
import Home from './pages/home';
import Path from './pages/route';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/route" element={<Path />} />
    </Routes>

  );

}

export default App;
