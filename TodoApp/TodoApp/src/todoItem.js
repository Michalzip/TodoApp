import React, { Component } from "react";
import { FaBath, FaBeer, FaBrain, FaTrash, FaTrashRestoreAlt } from 'react-icons/fa';
class TodoItem extends Component {
 
constructor(props) {
	super(props);
	this.ListTasks=this.ListTasks.bind(this);
	 this.DeleteItem=this.DeleteItem.bind(this);
	



}







DeleteItem(idToDelete){
	
	const configToDelete={
	method: "DELETE",
		headers: {'Content-Type': 'application/json'},
	
	}
	fetch(`https://localhost:3000/api/todoitems/${idToDelete}`,configToDelete).then(console.log("delete item: " + idToDelete));
}

ListTasks(task){

	
	return <div className="Task"><li key={task.id}onClick={() => console.log(task.id)}> 
	<div className="ContainerBox"><input type="checkbox"      className="check"></input></div>
<div className='taskName'>{task.task}

<button  onClick={() => this.DeleteItem(task.id)} className='trashBtn'><i className="fa fa-trash-o"></i><FaTrash /></button>
</div></li></div>

}
	render(){
		
		var memberTask=this.props.memberTask;
	return (

		<ul className="theList">{memberTask.map(w=>this.ListTasks(w))}</ul>
		);
	}
}

export default TodoItem;