import './items.css';
import React,{Component,lazy, Suspense} from 'react';

const Dataview = lazy(()=>{return import('./DataView/DataView')});
const PercentageView = lazy(()=>{return import('./PercentageView/PercentageView')});
const TableItem= (props)=>{

    if(props.PercentageView=='True'){
        return(     
        <div id='Box'>
            <div id="Header"><div id='HeaderName_'>Top Fluctuating Recipes</div></div>
            <div id='Graphs'>
            <Suspense fallback={<div>Loading</div>}>
            <PercentageView name={props.data.name} percentage='5' color='green'></PercentageView>
            <PercentageView name={props.data.name} percentage='3' color='red'></PercentageView>
            <PercentageView name={props.data.name} percentage='8' color='red'></PercentageView>
            </Suspense>
            </div>
        </div>
        );
    }
    


    return (
        <div id='Box'>
            <div id="Header"><div id='HeaderName'>High Margin Recipes</div></div>
            <div id='Graphs'>
                <Suspense fallback={<div>Loading</div>}><Dataview name={props.data.name} percentage={props.data.item1P} color={props.color}></Dataview>
                <Dataview name={props.data.name} percentage={props.data.item2P} color={props.color}></Dataview>
                <Dataview name={props.data.name} percentage={props.data.item3P} color={props.color}></Dataview></Suspense>
            </div>
        </div>
    );
}

export default TableItem;