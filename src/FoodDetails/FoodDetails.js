import React,{Component} from 'react';
import './FoodDetails.css'
import ColumnName from './Pages/cells/ColumnName';
import Tab from './Tabs/Tab.js'
class FoodDetails extends Component{

 

    render(){
        return (
            <div>
               <pages query={this.props.List}></pages>
            </div>
        );
    }
}

export default FoodDetails;
