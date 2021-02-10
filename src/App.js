import React, { Component, lazy} from 'react';
import './App.css'
import FoodDetails from './FoodDetails/FoodDetails';
import ColumnName from './FoodDetails/Pages/cells/ColumnName';
import Tab from './FoodDetails/Tabs/Tab';
import StatsComponent from './Stats/StatsComponent';


class App extends Component{


  

  render(){

    const data = {
      'name':'idly',
      'last_update':'Feb 10',
      'cogs':'10.00',
      'cost_price':'100.00',
      'sale_price':'120.00',
      'gross_margin':'25.00'
    }


    return (<div id='main'>
      <StatsComponent></StatsComponent>
      <br></br>
      <div id='Tabs'>
        <Tab name='ALL RECIPE(S)'></Tab>
        <Tab name='INCORRECT'></Tab>
        <Tab name='UNTAGGED'></Tab>
        <Tab name='DISABLED'></Tab>
      </div>
      <div id='Layout'>
      <ColumnName ColumnName='True'></ColumnName>
      <ColumnName ColumnName='False' state={data}></ColumnName>
      <ColumnName ColumnName='False' state={data}></ColumnName>
      <ColumnName ColumnName='False' state={data}></ColumnName>
      <ColumnName ColumnName='False' state={data}></ColumnName>
      <ColumnName ColumnName='False' state={data}></ColumnName></div>
    </div>
    );
  }
}

export default App;
