import React,{Component,lazy, Suspense} from 'react';
import './StatsComponent.css'
import PercentageView from './Items/PercentageView/PercentageView'
import TableItem from './Items/Items'
import { render } from '@testing-library/react';
class  StatsComponent extends Component{
   

    
   render(){

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
                <TableItem api={'https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top'}
                 isLoaded={false} color={'green'} PercentageView='False' Header='High Margin Recipes'></TableItem>
                <TableItem  api={'https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom'}
                isLoaded={true} color={'Red'} PercentageView='False' Header='Low Margin Recipes'></TableItem>
                <TableItem api={'https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top'}
                 isLoaded={true} color={'Red'} PercentageView='True' Header='Top Fluctuating Recipes'></TableItem>
            </div>);
   }
}
                                   
export default StatsComponent;