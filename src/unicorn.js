import React, { Component } from 'reactn'
import './unicorn.css';
import Axios from 'axios';


class Unicorn extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      color: this.props.color,
      food: this.props.food,
      location: this.props.location,
    }
  }
  handleChange = name => event => {
    console.log('name', name);
    console.log('target.value', event.target.value);
    this.setState({
      [name]: event.target.value
    }, () => {
      Axios.put(`https://unicorn-backend.herokuapp.com/api/v1/unicorn`, { name: this.state.name, location: this.state.location})
      
    });

  }
  
  
  render () {
    
    return (
      <div className="unicornLineItem">
        <h3>{this.props.name}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.food}</h3>
        <select 
          onChange={this.handleChange('location')} 
          value={this.state.location}
          selected={this.state.location}>
          <option value='barn'>Barn</option>
          <option value='pasture'>Pasture</option>
          <option value='trail'>Trail</option>
        </select>
      </div>
    )
  }
}

export default Unicorn;