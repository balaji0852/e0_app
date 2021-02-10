import React,{Component} from 'react';
import ColumnName from './cells/ColumnName'
class Pages extends Component{

    state = {
        selected : false,
        isLoaded:false,
        data :{},
    }

    dishes = {}

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

    // componentDidUpdate(){
    //     console.log('componentdidUpdate')
    // }

   

    render(){

        if(this.state.isLoaded){
            let i = -1;
            this.dishes = (
                <div>
                    {
                        this.state.data.map((element,index)=>{
                            if(index==0){
                                return (<ColumnName key={element.name} ColumnTitle='True'  SelectAll={()=>this.setState({selected : !this.state.selected})}></ColumnName>);
                            }
                            else if(index%2==0){
                                return (<ColumnName key={element.name} ColumnTitle='False'  state={element}  onChange={()=>{}}checked={this.state.selected}></ColumnName>);
                            }
                            else{
                                return (<ColumnName key={element.name} ColumnTitle='False' onChange={()=>{}}  state={element}  color='whitesmoke' checked={this.state.selected}></ColumnName>);
                            }
                    })}
                </div>
            )
            return (<div>
                {this.dishes}
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