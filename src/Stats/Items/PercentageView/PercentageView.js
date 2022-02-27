import './PercentageView.css'
import { Icon } from 'semantic-ui-react';


const PercentageView = (props)=>{
    return (
        <div id="DataItems">
             <div id='ItemName'>{props.name}</div>
            <br></br>
            <div id='Line'></div>
            <br></br>
            <div id='Percentage' style={{color: props.color}}>{props.percentage}%</div>
            <Icon disabled name='users' />
        </div>);
}

export default PercentageView;