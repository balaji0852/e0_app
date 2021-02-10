import React, { Component, lazy} from 'react';
import './App.css'
import FoodDetails from './FoodDetails/FoodDetails';
import ColumnName from './FoodDetails/Pages/cells/ColumnName';
import Tab from './FoodDetails/Tabs/Tab';
import StatsComponent from './Stats/StatsComponent';
import Pages from './FoodDetails/Pages/Pages'


class App extends Component{


  

  render(){

 

    return (<div id='main'>
      <StatsComponent></StatsComponent>
      <br></br>
      <div id='Tabs'>
        <button id='tab' onClick={()=>{console.log('all recipes')}}>ALL RECIPE(S)</button>
        <button id='tab' onClick={()=>{console.log('incorrect')}}>INCORRECT</button>
        <button id='tab' onClick={()=>{console.log('untagged ')}}>UNTAGGED</button>
        <button id='tab' onClick={()=>{console.log('disabled')}}>DISABLED</button>
      </div>
      <div id='Layout'>
          <Pages>hello</Pages>
      </div>
    </div>
    );
  }
}

export default App;
