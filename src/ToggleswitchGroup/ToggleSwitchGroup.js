import React, { Component } from 'react';
class ToggleSwitchGroup extends Component {
    render() {
        const { headline, checked, value, onClick, name} = this.props
      return (
          
        <div>
            <h2> {headline}</h2>
            <div className="switch-box">

            <label htmlFor="text"> {value}</label>
            <label className="switch" >
                <input onClick={onClick} name={name}  type="checkbox" checked={checked} />
                <span className="slider round"></span>
            </label>
          
            </div>
        </div>
      );
    }
  }

export default ToggleSwitchGroup;