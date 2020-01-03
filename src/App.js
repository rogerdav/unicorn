import React, { Component} from 'reactn';
import logo from './logo.svg';
import Header from './header';
import Unicorn from './unicorn';

import './App.css';
import './header.css';

class App extends Component {
  render () {
    console.log('global', this.global.unicorns);
    
    let contents =this.global.unicorns.map(element => {
      console.log('element', element);
      return <Unicorn name={element.name} color={element.color} food={element.food} location={element.location} />
    });
    console.log('contents', contents)
    
    return (
      <div>
       <Header />
      {contents}
      </div>
    )
  }
}

export default App;