import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ModalWindow from './components/modal/ModalWindow';
import { CustomEnumPath } from './enam';
import MainInfoPage from './components/MainInfo';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={CustomEnumPath.home} element={<MainInfoPage />} />
        <Route path={CustomEnumPath.modalWindow} element={<ModalWindow />} />
      </Routes>
    </Router>
    ,
  </Provider>,
);
