import React,{Component} from 'react';
import './FoodDetails.css'
import ColumnName from './Pages/cells/ColumnName';
import Tab from './Tabs/Tab.js'
class FoodDetails extends Component{

    state = {
        'item':'Ambur Biriyani',
        'Date':'Feb 10,2020',
        'COGS':'20.22%',
        'costprice':'200.00',
        'saleprice':'1000.00',
        'grossmargin':'80%',
        'tags':'Indian'
    }

    render(){
        return (
            <div>
                <ColumnName ColumnName='True'></ColumnName>
                <ColumnName ColumnName='False'></ColumnName>
                <ColumnName ColumnName='False'></ColumnName>
                <ColumnName ColumnName='False'></ColumnName>
                <ColumnName ColumnName='False'></ColumnName>
                <ColumnName ColumnName='False'></ColumnName>
                <ColumnName ColumnName='False'></ColumnName>
                <ColumnName ColumnName='False'></ColumnName>
            </div>
        );
    }
}

export default FoodDetails;
