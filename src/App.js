import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import DryCleaningPage from './pages/DryCleaningPage';
import ExpressWashPage from './pages/ExpressWashPage';
import PrivacyPage from './pages/PrivacyPage';
import LocationPage from './pages/LocationPage';
import ProfessionalIroningPage from './pages/ProfessionalIroningPage';
import ShopPage from './pages/ShopPage';
import TermsPage from './pages/TermsPage';
import WarrantyPage from './pages/WarrantyPage'
import NotFoundPage from './pages/PageNotFound';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/sobre-nosotros' element={<AboutPage/>}/>
          <Route path='/empleo' element={<CareersPage/>}/>
          <Route path='/limpieza-en-seco' element={<DryCleaningPage/>}/>
          <Route path='/lavado-express' element={<ExpressWashPage/>}/>
          <Route path='/privacidad' element={<PrivacyPage/>}/>
          <Route path='/locales' element={<LocationPage/>}/>
          <Route path='/planchado-profesional' element={<ProfessionalIroningPage/>}/>
          <Route path='/tienda' element={<ShopPage/>}/>
          <Route path='/terminos' element={<TermsPage/>}/>
          <Route path='/garantias' element={<WarrantyPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
