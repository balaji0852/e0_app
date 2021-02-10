import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './DataView.css';

const Dataview = (props)=>{
    
    return (
        <div id="DataItems">
             <div id='ItemName'>{props.name}</div>
                <br></br>
            <div id='graph'>               
                <CircularProgressbar value={props.percentage} text={`${props.percentage}%`} 
                styles={buildStyles({rotation: 0.001,
                    textColor: props.color,
                    pathColor: props.color})}/>
            </div>
        </div>
    );
}


export default Dataview;    