//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutSergio from './pages/AboutSergio';
import YogaClasses from './pages/YogaClasses';
import Meditation from './pages/Meditation';
import CustomClasses from './pages/CustomClasses';
import PracticeSpace from './pages/PracticeSpace';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Philosophy from './pages/Philosophy';
import NotFound from './pages/NotFound';
import Test from './pages/Test';

import { BASE_URL } from './config/constants';
import { ROUTES } from './config/routes';

const App = () => {
  return (
    <Router basename={BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.about} element={<AboutSergio />} />
          <Route path={ROUTES.yogaClasses} element={<YogaClasses />} />
          <Route path={ROUTES.meditation} element={<Meditation />} />
          <Route path={ROUTES.customClasses} element={<CustomClasses />} />
          <Route path={ROUTES.blog} element={<Blog />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.philosophy} element={<Philosophy />} />
          <Route path={ROUTES.practiceSpace} element={<PracticeSpace />} /> 
          <Route path={ROUTES.notFound} element={<NotFound />} />
        </Route>
        <Route path={ROUTES.test} element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;