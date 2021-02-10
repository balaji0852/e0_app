import './PercentageView.css'


const PercentageView = (props)=>{
    return (
        <div id="DataItems">
             <div id='ItemName'>{props.name}</div>
            <br></br>
            <div id='Line'></div>
            <br></br>
            <div id='Percentage' style={{color: props.color}}>{props.percentage}%</div>
        </div>);
}

export default PercentageView;