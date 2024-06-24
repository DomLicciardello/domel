import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Components from './pages/Components';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/components' element={<Components/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
