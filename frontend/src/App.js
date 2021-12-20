import React from 'react';
import './App.css';
import './componentes/Header.css';
import './componentes/Login.css';
import Header from './componentes/Header';
import {Routes,Route,} from 'react-router-dom';
import Login from './componentes/Login';
import NotFound from './componentes/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
    
          <Routes>
            <Route exact path="/" component={<Header/>} />
            <Route path="/login" component={<Login/>}/>
            <Route path="/recetas" component={<Header/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
    </div>
  );
}

export default App;