import React from 'react';
import './App.css';
import Main from './main'; 
import Navbar from './navbar';

 class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Navbar/>
        <Main/>
      </div>
    );
  }
}

export default App;
