import React, { Component } from 'react';
import './ToggleSwitch.scss';

class ToggleSwitchNumeric extends Component {
    render() {
        const { headline, checked, value, onClick, name} = this.props
      return (
          
        <div>
            <h2> {headline}</h2>
            <div className="switch-box">
            <label htmlFor="text"> {value}</label>
             { <input type="number" id="quantity" name="quantity" min="1" max="10" placeholder="10"/> } 
            <label className="switch" >
                <input   onClick={onClick} name={name} type="checkbox" checked={checked} />
                <span className="slider round"></span>
            </label>
          
            </div>  
        </div>
      );
    }
  }

          
  

export default ToggleSwitchNumeric;