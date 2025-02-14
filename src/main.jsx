import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ProductProvider } from './context/ProductContext.jsx';

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')).render(



  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ProductProvider>
          <App />
        </ProductProvider>
      </Router>
    </PersistGate>
  </Provider>

);
