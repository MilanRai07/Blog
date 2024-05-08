import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home/HomePage';
import Footer from './components/Footer';
import FootballPage from './pages/Football/FootballPage';
import UFCPage from './pages/UFC/UFCPage';
import BasketBallPage from './pages/BasketBall/BasketBallPage';
import BeMember from './pages/BeMember/BeMember';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path='/football' element={<FootballPage />} />
          <Route path='/ufc' element={<UFCPage />} />
          <Route path='/basketball' element={<BasketBallPage />} />
          <Route path='/beamember' element={<BeMember/>}/>
        </Route>
      </Routes>
      <Footer />
    </HashRouter>

  )
}

export default App;