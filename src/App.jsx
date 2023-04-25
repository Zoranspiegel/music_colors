import { Routes, Route } from 'react-router-dom';
import Gamma from './components/Gamma';
import DiatonicScale from './components/DiatonicScale';
import ChromaticScale from './components/ChromaticScale';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/gamma' element={<Gamma />} />
        <Route path='/diatonic' element={<DiatonicScale />} />
        <Route path='/chromatic' element={<ChromaticScale />} />
      </Routes>
    </>
  );
}

export default App;
