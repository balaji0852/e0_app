import './items.css';
import React,{Component,lazy, Suspense} from 'react';
import Dataview from './DataView/DataView';
import PercentageView from './PercentageView/PercentageView';

class TableItem extends Component{


    state = {
        isLoaded:false,
        data :{},
    }

    componentDidMount(){
        fetch(this.props.api)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded:true,
                        data:result.results,
                     });
            },(error)=>{
                this.setState({
                    isLoaded:false,
                })
            });
    }       


  render(){


    console.log(this.props.PercentageView);

    if(this.props.PercentageView=='True'){
        if(this.state.isLoaded){
            return(     
                <div id='Box'>
                    <div id="Header"><div id='HeaderName_'>{this.props.Header}</div></div>
                    <div id='Graphs'>
                    <Suspense fallback={<div>Loading</div>}>
                    <PercentageView name={this.state.data[0].name} percentage='5' color='green'></PercentageView>
                    <PercentageView name={this.state.data[1].name} percentage='3' color='red'></PercentageView>
                    <PercentageView name={this.state.data[2].name} percentage='8' color='red'></PercentageView>
                    </Suspense>
                    </div>
                </div>);
        }
        else{
            return(    
                <div id='Box'>
                    <div id="Header"><div id='HeaderName_'>{this.props.Header}</div></div>
                    <div id='Graphs'>
                    Loading
                    </div>
                </div>);
        }
    }
    

    if(this.state.isLoaded){
        console.log(this.state.data[0]);
        return(     
            <div id='Box'>
                <div id="Header"><div id='HeaderName_'>{this.props.Header}</div></div>
                <div id='Graphs'>
                <Dataview name={this.state.data[0].name} percentage={80} color={this.props.color}></Dataview>
                <Dataview name={this.state.data[1].name} percentage={80} color={this.props.color}></Dataview>
                <Dataview name={this.state.data[2].name} percentage={80} color={this.props.color}></Dataview>
                </div>
            </div>);
    }
    else{
        return(    
            <div id='Box'>
                <div id="Header"><div id='HeaderName_'>{this.props.Header}</div></div>
                <div id='Graphs'>
                Loading
                </div>
            </div>);
    }
   
}
}

export default TableItem;


