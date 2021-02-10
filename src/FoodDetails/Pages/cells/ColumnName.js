import './ColumnName.css';
import TagElement from '../Tags/Tags';


const ColumnName = (props)=>{

if(props.ColumnTitle=='True'){
    return (
        <div id='Column'>
            <div><input id='SelectAll' type="checkbox" onChange={props.SelectAll}></input></div>
            <div id='ColumnEleName' >name</div>
            <div id='ColumnEle'>Last Updated</div>
            <div id='ColumnEle'>COGS</div>
            <div id='ColumnEle'>Cost Price</div>
            <div id='ColumnEle'>Sale Price</div>
            <div id='ColumnEle'>Gross Margin</div>
            <div id='ColumnEle'>Tags/Action</div>
        </div>
    );
 }


    return (
        <div id='Elements' style={{backgroundColor: props.color}}>
            <div><input id='Select' class={props.state.name} type="checkbox" 
                checked={props.checked} onChange={props.onChange}></input>
            </div>
            <div id='ColumnEleName'>{props.state.name}</div>
            <div id='ColumnEle'>{Date(props.state.last_updated.date).slice(4,15)}</div>
            <div id='ColumnEle'>{props.state.cogs}</div>
            <div id='ColumnEle'>{props.state.cost_price.toFixed(2)}</div>
            <div id='ColumnEle'>{props.state.sale_price.toFixed(2)}</div>
            <div id='ColumnEle'>{props.state.gross_margin.toFixed(2)}</div>
            <div id='ColumnEleTag'><TagElement title='India Ma...'></TagElement><TagElement title='India Ma...'></TagElement></div>
        </div>
    );
};


export default ColumnName;