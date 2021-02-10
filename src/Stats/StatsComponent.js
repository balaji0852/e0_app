import React,{Component,lazy, Suspense} from 'react';
import './StatsComponent.css'
import PercentageView from './Items/PercentageView/PercentageView'
import TableItem from './Items/Items'
import { render } from '@testing-library/react';
class  StatsComponent extends Component{
    state = {
        data1 :{},
        data2 :{},
        data3 :{},
    }

    componentDidMount(){
        fetch('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top')
            .then(res => res.json())
            .then(
            (result) => {
                this.setState(this.state.data3 = result.results);
                console.log(this.state.data1);
            },(error)=>console.log(error));

        fetch('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top')
            .then(res => res.json())
            .then(
            (result) => {
                this.setState(this.state.data1 = result.results);
            },(error)=>console.log(error));  

        fetch('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom')
            .then(res => res.json())
            .then(
            (result) => {
                this.setState(this.state.data2 = result.results);
            },(error)=>console.log(error));         
    }
   
    
   render(){
    console.log('Second');

    var data = {
        'name':'chicken Manchurian',
        'item1': 'Veg noodles',
        'item1P': '60',
        'item2': 'Veg fried rice',
        'item2P': '90',
        'item3': 'Veg biriayan',
        'item3P': '75',
    }
        return  (<div id="StatsTable">
                <TableItem data={data} color='green' PercentageView='False'></TableItem>
                <TableItem data={data} color='Red' PercentageView='False'></TableItem>
                <TableItem data={this.state.data3} color='Red' PercentageView='True'></TableItem>
            </div>);
   }
}
                                   
export default StatsComponent;