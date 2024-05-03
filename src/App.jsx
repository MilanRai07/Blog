import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<HomePage />} />

        </Route>
      </Routes>
    </HashRouter>

  )
}

export default App;