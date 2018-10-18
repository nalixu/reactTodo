import React from 'react';

export default class Dbinput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
        this.handleDb=this.handleDb.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleDb(index){
        this.setState({
            show:!this.state.show
        })
        this.handleChange(index)
    }

    handleChange(index){
        if(!this.input) return false;
        let value = this.input.value;
        this.props.onChange(index,value)
    }

    render(){
        const  {data,index} = this.props;
        return(
           <div onDoubleClick={()=>this.handleDb(index)}>
           {
               this.state.show?<p>{data.value}</p>:<input type="text" defaultValue={data.value} ref={r=>this.input=r} />
            }
                
                
           </div>
           
        )
    }
}