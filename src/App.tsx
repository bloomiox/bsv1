import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import NewsPage from './pages/NewsPage.tsx';
import NewsArticle from './pages/NewsArticle.tsx';
import AthletesPage from './pages/AthletesPage';
import BrandsPage from './pages/BrandsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
        <Route path="/athletes" element={<AthletesPage />} />
        <Route path="/brands" element={<BrandsPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App