import React, { Component } from 'reactn'
import './unicorn.css';


class Unicorn extends Component {
  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //   name: this.props.name,
  //   //   color: this.props.color,
  //   //   food: this.props.food,
  //   //   location: this.props.location,
  //   // }
  // }
  this.hanleChange() => {
    
  }
  }
  
  render () {
    console.log('props', this.props.name);
    return (
      <div className="unicornLineItem">
        <h3>{this.props.name}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.food}</h3>
        <h3>{this.props.location}</h3>
      </div>
    )
  }
}

export default Unicorn;