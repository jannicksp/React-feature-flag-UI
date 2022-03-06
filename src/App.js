import React from 'react';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import ToggleSwitchGroup from './ToggleswitchGroup/ToggleSwitchGroup';
import './App.css';
import ToggleSwitchNumeric from './ToggleSwitchNumeric/ToggleSwitch';

function App() {
  return (
    <>
      <h1> General</h1>
      <div className="flex">
        <div >

          <ToggleSwitch  value="Case Management"/>
          <ToggleSwitch value="Notification"/>
        </div>
        <div> 
          <ToggleSwitch value="Map imeline"/>
          <ToggleSwitch value="Mass communication"/>
        </div>
        <div>
          <ToggleSwitch value="views and briefing"/>
          <ToggleSwitch value="Traffic Cameras"/>
        </div>
      </div>
     

      <div className="flex">
        <div>
          <ToggleSwitchGroup headline="Settings" value="Audit Log" onClick={selects2}/>
          <ToggleSwitch value="Users" name="2"/>
        </div>
        <div>
      
          <ToggleSwitchGroup headline="Settings" value="Audit log" onClick={selects1}  />
          <ToggleSwitch  value="users"  name="1"/>
          <ToggleSwitch  value="users add"  name="1"/>
          <ToggleSwitch  value="user delete"  name="1"/>
          <ToggleSwitch  value="user edit"  name="1"/>
          <ToggleSwitchNumeric  value="max users"  name="1"/>
        </div>
        <div>
          <ToggleSwitchGroup headline="Alerts" value="alert manager"/>
          <ToggleSwitchNumeric value="alert rules"/>
        </div>

      </div>
    </>
  );
}
function selects1(){  
  var ele=document.getElementsByName("1");  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
      if(ele[i].checked===false){
        ele[i].checked=true; 
      } 
      else {
        ele[i].checked=false; 
      }

  }  
}  
function selects2(){  
  var ele=document.getElementsByName("2");  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
      if(ele[i].checked===false){
        ele[i].checked=true; 
      } 
      else {
        ele[i].checked=false; 
      }

  }  
}  
 

export default App;