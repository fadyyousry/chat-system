import React from 'react';
import './App.css'
import Main from './Main';

const Url = React.createContext('http://localhost:4000');

class App extends React.Component {
  render(){
    return (
      <div className="container mt-5">
        <Main />
      </div>
    );
  }
}

export default App;
export {Url};
