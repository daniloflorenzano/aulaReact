import React from 'react';
import Cliente from './components/pages/cliente/cliente';
import EditClient from './components/pages/cliente/editCliente';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

// https://www.w3schools.com/react/react_router.asp
// https://reactrouter.com/en/main/hooks/use-params
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cliente/>}></Route>
        <Route path=":clientId" element={<EditClient/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
