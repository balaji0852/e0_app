import React, { Component, lazy, Suspense} from 'react';
import './App.css'
import FoodDetails from './FoodDetails/FoodDetails';
import ColumnName from './FoodDetails/Pages/cells/ColumnName';
import StatsComponent from './Stats/StatsComponent';
import Pages from './FoodDetails/Pages/Pages'


class App extends Component{


  state = {
    'tab':{},
    'color1':'whitesmoke',
    'color2':{},
    'color3':{},
    'color4':{},
  }

  

  render(){

   
    return (<div id='main'>
      <StatsComponent></StatsComponent>
      <br></br>
      <div id='Tabs'>
        <button id='tab' style={{backgroundColor: this.state.color1}} onClick={()=>{this.setState({'tab':'page=1','color1':'whitesmoke', 'color2':'white','color3':'white','color4':'white'});}}>ALL RECIPE(S)</button>
        <button id='tab' style={{backgroundColor: this.state.color2}} onClick={()=>{this.setState({'tab':'page=1/?is_incorrect=true','color2':'whitesmoke', 'color1':'white','color3':'white','color4':'white'})}}>INCORRECT</button>
        <button id='tab' style={{backgroundColor: this.state.color3}} onClick={()=>{this.setState({'tab':'page=1/?is_untagged=true','color3':'whitesmoke', 'color1':'white','color2':'white','color4':'white'})}}>UNTAGGED</button>
        <button id='tab' style={{backgroundColor: this.state.color4}} onClick={()=>{this.setState({'tab':'page=1/?id_disabled=true','color4':'whitesmoke', 'color2':'white','color3':'white','color1':'white'})}}>DISABLED</button>
      </div>
      <div id='Layout'>
        <Suspense fallback={<div>Loading</div>}>
          <Pages query={this.state.tab}>hello</Pages>
          </Suspense>
      </div>
    </div>
    );
  }
}

export default App;
