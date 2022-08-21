import './App.css';
import NavBar from './components/Navbar';
import Students from './components/Students';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import EditStudents from './components/EditStudent';

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
            <Route exact path='/home' element={<Students/>} />
            <Route exact path='/edit/:id' element={<EditStudents/> } />
            <Route exact path='/register' element={<Register onSubmit={handleSubmit}/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
