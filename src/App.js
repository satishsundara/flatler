import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import FilterResult from './pages/FilterResult';
import ViewFlat from './pages/viewFlat';
import PostProperty from './pages/PostProperty';

const App = () => {
  return (
    <Router>
      <Header />
      
      <main style={{ minHeight: '80vh' }} className='app-pad'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flats" element={<FilterResult />} />
          <Route path="/flat" element={<ViewFlat />} />
          <Route path="/postproperty" element={<PostProperty />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
