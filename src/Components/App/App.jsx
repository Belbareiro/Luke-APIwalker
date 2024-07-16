import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import ResourcePage from '../ResourcePage/ResourcePage';
import Layout from '../Layout/Layout';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/:resource/:id" element={
          <Layout>
            <ResourcePage />
          </Layout>
        } />
      </Routes>
    </Router>

  );
};

export default App;