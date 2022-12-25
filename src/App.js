import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './components/Navigation';
import History from './components/History';
import Payloads from './components/Payloads';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<History />} />
        <Route path="/payloads" element={<Payloads />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
