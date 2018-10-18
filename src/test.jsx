import React from 'react'
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.handleCount=this.handleCount.bind(this)
    }

    handleCount(){
        let cont=this.state.count
        cont++
        this.setState({count:cont})
        
    }
    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleCount}>加</button>
            </div>
        )
    }
}
export default Test