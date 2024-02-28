import React from 'react';

import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Expenses } from './pages/expenses/expenses';
import { ResultContext } from './services/provider/resultProvider';
import { useResEditButton } from './hooks/useResEditButton';


function App() {
  const location= useLocation();
  const{result, setResult} = useResEditButton();

  
  return (
    
      <div className="App">
        <ResultContext.Provider value={{result, setResult}}>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='/expenses' element={<Expenses />} />
          </Routes>
        </ResultContext.Provider>
    </div>
    
  );
}

export default App;
