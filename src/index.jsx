import React from 'react'
import ReactDOM from 'react-dom'
import List from './list.jsx'
import NewType from './newType.jsx'
import './style.scss'
// import Test from './test.jsx'
class Todo extends React.Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            todoList: [],
            
        };
        this.onChange = this.onChange.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.updateItem = this.updateItem.bind(this)
      }
      deleteData(id){
        let todoList = this.state.todoList
         todoList.splice(id,1);//splice 返回被删除的值
        this.setState({todoList})
      }
      checkedData(id){
       
      }

    onChange(value){
        console.log(value)
        let list = this.state.todoList;
        list.push({value});
        this.setState({todoList:list})
       
    }
    updateItem(key,value){
        console.log(key,value)
        let list = this.state.todoList;
        list[key].value =value
        this.setState({todoList:list})
    }
    render(){
        return(
            <div className="container">
            {/* <Test /> */}
                <NewType onChange={this.onChange}/>
                <List data={this.state.todoList} deleteData={this.deleteData} updateItem={this.updateItem} />
            </div>
        )
    }
}


ReactDOM.render(
    <Todo />,
    document.getElementById('app')
)