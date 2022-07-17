import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../Pages/Main/Main';
import { Details } from '../Pages/Details/Details';
import { Header } from '../Header/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='details' element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
