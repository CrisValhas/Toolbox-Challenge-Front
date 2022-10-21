import React from 'react';
import { Provider } from 'react-redux'
import {store} from './Redux/Store/index'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from "./Components/View";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <h1>React Test App</h1>
      </header>
      <div className='container'>
        <View/>
      </div>
    </div>
    </Provider>
    
  );
}

export default App;
