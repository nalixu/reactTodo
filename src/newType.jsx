import React from 'react'
import './style.scss'
class NewType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            value:'',
            arr:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        
    }
    handleChange(e){     
            this.setState({
                
                value:e.target.value              
            })
            
    }
    handleAdd(){
        let value = this.input.value;
        this.props.onChange(value)
        this.setState({
            value:''
        })
    }
    render(){
        return(
            <div>
                <input className="inputText" placeholder="what do you" type="text" value={this.state.value} onChange={this.handleChange} ref={r=>this.input=r}/>
                <input className="btn" type="button" value="增加" onClick={this.handleAdd} />
            </div>
            
        )
    }
}
export default NewType