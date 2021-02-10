import './ColumnName.css';
import TagElement from '../Tags/Tags';


const ColumnName = (props)=>{

if(props.ColumnName=='True'){
    return (
        <div id='Column'>
            <div><input id='SelectAll' type="checkbox"></input></div>
            <div id='ColumnEle'>name</div>
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
        <div id='Elements'>
            <div><input id='Select' type="checkbox"></input></div>
            <div id='ColumnEle'>{props.state.name}</div>
            <div id='ColumnEle'>{props.state.last_update}</div>
            <div id='ColumnEle'>{props.state.cogs}</div>
            <div id='ColumnEle'>{props.state.cost_price}</div>
            <div id='ColumnEle'>{props.state.sale_price}</div>
            <div id='ColumnEle'>{props.state.gross_margin}</div>
            <div id='ColumnEle'><TagElement title='India Ma...'></TagElement></div>
        </div>
    );
};


export default ColumnName;