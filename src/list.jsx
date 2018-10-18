import React from 'react'
import './style.scss'
import Dbinput from './components/ListItem';

class List extends React.Component{
    constructor(props){
        super(props)
        this.handleDel=this.handleDel.bind(this)
        // this.dblInput=this.dblInput.bind(this)
        // this.updateItem = this.updateItem.bind(this)
        this.state={
            show:false,
            dbcli:true
        }
    }
      handleDel(e){
          console.log(e)
          this.props.deleteData(e)  
      }
    //   dblInput(){
    //       <Dbinput />
    //   }


      render(){
          const data = this.props.data
        //   const ishow=this.state.show
          return(
              <div className="list">
                  {
                      data.map((data,index)=><div className="item" key={index}>
                             
                                <i className="circle"></i>
                             
                              {/* <input className="checkCircle" type="checkbox" id="circle"   /> */}
                              
                              <Dbinput data={data} key={index} index={index} onChange={this.props.updateItem}/>
                                
                             
                              
                              <input className="btn" type="button" value="删除" data-key={index} onClick={()=>this.handleDel(index)}  />
                              </div>)
                  }
              </div>
     
          )
      }
  }
  export default List