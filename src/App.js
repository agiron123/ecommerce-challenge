import './App.css';
import ECommerceNavigationBar from './components/Navbar/ECommerceNavigationBar';
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <header>
          <ECommerceNavigationBar />
        </header>
      </div>
    </Provider>
  );
}

export default App;
