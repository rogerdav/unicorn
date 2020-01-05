import React, { Component} from 'reactn';
import logo from './logo.svg';
import Header from './header';
import Unicorn from './unicorn';

import './App.css';
import './header.css';

class App extends Component {
  render () {
    let contents =this.global.unicorns.map(element => {
      return <Unicorn name={element.name} color={element.color} food={element.food} location={element.location} />
    });
    
    
    return (
      <div className="main">
       <Header />
       
      {contents}

       
      </div>
    )
  }
}

export default App;