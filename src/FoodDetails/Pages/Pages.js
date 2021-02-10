import React,{Component} from 'react';
import ColumnName from './cells/ColumnName'
class Pages extends Component{

    state = {
        isLoaded:false,
        data :{},
        items:{},
    }

    componentDidMount(){
        fetch('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?'+this.props.query)
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
        if(this.state.isLoaded){
            const temp = [<ColumnName ColumnName='True' SelectAll={()=>{console.log('hell')}}></ColumnName>];
            let i = 0;
            this.state.data.forEach(element => {
                    if(i%2!=0){
                            temp.push(<ColumnName ColumnName='False' state={element} color='whitesmoke'>
                            </ColumnName>)
                        i++;
                    }
                    else{
                            temp.push(<ColumnName ColumnName='False' state={element}>
                            </ColumnName>)
                        i++;
                    }
            });
            return (<div>
                {temp}
            </div>)
        }
        else{
            return(<div>
                No data
            </div>);
        }
    }
}

export default Pages;