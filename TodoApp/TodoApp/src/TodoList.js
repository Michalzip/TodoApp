import React, {Component,useEffect,useState} from "react";
import TodoItem from "./todoItem";
import { FaBath, FaBeer, FaBrain, FaPlus, FaTrash, FaTrashRestoreAlt } from 'react-icons/fa';



class TodoList extends Component{

constructor(props){
    super(props);
    this.state={items:[]};
    this.jsonData={data:[], loading: true};
    this.addItem=this.addItem.bind(this);
 

}


componentDidMount(){

    console.log('wdwd');
    this.fetchTodosApi();
}



addItem(e){
    e.preventDefault();
    
    console.log(this._inputElement.value);
   
    if(this._inputElement.value!==""){

        
        const configToPost={
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                "task":this._inputElement.value,
                "isCompleted":false

            })
        };
        fetch("https://localhost:3000/api/todoitems",configToPost)
       

  console.log('itemy:'+this.state.items);
}



}

async fetchTodosApi(){

     
    const response=await fetch("/api/todoitems");

    if(response.status==200){
        
        
        const data= await response.json();
 
        this.jsonData.data=data;
        this.jsonData.loading=false;
    
        this.setState((prevState)=>{
            
            return{
                items:prevState.items.concat(this.jsonData),
              
            };
              
           
              }
              );

    }else{
        
    }
   

}

render(){
    let configLayout=this.jsonData.loading?<div id="loading-bar-spinner" className="spinner"><div className="spinner-icon"></div></div>:<TodoItem memberTask={this.jsonData.data}/>;
		return(
<div className="Page">
          <div className='positionContainer'>

            <div className="container">
               <div className='title'> <h1>TodoApp</h1></div>
    
                <div className='Box'>
              
    <form onSubmit={this.addItem}>

  <input  ref={(a) => this._inputElement=a}placeholder="What needs to be done?"></input> <button className='addBtn'><i className="fa fa-trash-o"></i><FaPlus /></button>

    </form>

            {configLayout}
                </div>
                
            </div>
            </div>
            <div className="Footer"><p>
                
                
            "Patience, persistence and sweat make an unbeatable combination of success." ~ Napoleon Bonaparte




                </p></div>

            </div>
		);
	}


}

export default TodoList;