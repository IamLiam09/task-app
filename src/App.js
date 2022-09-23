import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./component/overview";
class App extends Component {
	constructor() {
		super();
		this.state = {
			task: { 
				text: "",
                id: uniqid()
    },
			tasks: [],
		};
	}
	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
        		id: this.state.task.id
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: { text: "",
              id: uniqid()
            },
		});
	};
	deleteTask = (e) => {
		var indec = this.state.tasks.id
		var array = this.state.tasks.filter(function(item) {
			return item !== indec
		  });
		  this.setState({
			tasks: array
		  })
		console.log(this.state.task.id)
	}
	render() {
		const { task, tasks } = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmitTask}>
					<label htmlFor="taskInput">Enter task</label>
					<input
						type="text"
						id="taskInput"
						onChange={this.handleChange}
						value={task.text}
					/>
					<button type="submit">Add Task</button>
				</form>
        		<Overview tasks={tasks} deleteTask={this.deleteTask}/>
			</div>
		);
	}
}

export default App;
