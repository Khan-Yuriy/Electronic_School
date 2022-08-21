import './App.css';
import NavBar from './components/Navbar';
import Students from './components/Students';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (submitted) =>{
    setIsSubmitted(submitted);
  }

  return (
    <div className="App">
      <NavBar isSubmitted={isSubmitted} onSubmit={handleSubmit}/>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Login onSubmit={handleSubmit}/>} />
            <Route exact path='/home' element={isSubmitted? <Students/> : <Navigate to="/" />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
