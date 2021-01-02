import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { TableWrapper } from "../../styles/common.styles";
import {Icon} from "antd";
import Todoform from "./todo-form"
import EditTodoform from "./edit-todo-form"
import Loader from "../../components/Loader";
import NoResults from "../../components/NoResults";
import { openSuccessNotification, openErrorNotification } from "../../utils/Notification";
import config from '../../config'

function setBodyHeaders(params) {
	return {
	  headers: {
		"Content-Type": "application/json"
	  },
	  data: params
	}
  
  }
class UserTodos extends Component {
	state = {
		todoList: [],
		showForm: false,
		showEditForm: false,
		selectedData : {
			description: "",
			user_id: "",
			state: "",
			id: ""
		}
	};

	getTodos = async () => {
		const { match } = this.props;
		const { user_id } = match.params;
		this.setState({
			isLoadingTodos: true
		})
		axios
			.get(`${config.TODO_API_BASE_URL}/api/todo/list?user_id=${user_id}`)
			.then(({ data }) => {
				this.setState({
					todoList: [...data.data.todos],
					isLoadingTodos: false
				});
			})
			.catch(err => {
				console.log(err);
			});
	  };
	componentDidMount() {
		this.getTodos()
	}

	showForm = () => {
		this.setState({
		  showForm: true
		})
	  }

	  hideForm = () => {
		this.setState({
		  showForm: false
		})
	  }

	  showEditForm = ( id,
		description,
		state,
		user_id) => {
		this.setState({
		  selectedData: {
			description: description,
			user_id: user_id,
			state: state,
			id: id
		  },
		  showEditForm: true
		})
	  }

	  hideEditForm = () => {
		this.setState({
		  showEditForm: false
		})
	  }

	  deleteTask = (id, user_id) => {
		this.setState({
		  isDeletingTask: true
		});
	   
		axios
		  .delete(
			`${config.TODO_API_BASE_URL}/api/todo/remove/${id}`,
		   setBodyHeaders({user_id: user_id})
		  )
		  .then(res => {
			this.setState({
			  isDeletingTask: false
			});
	
			openSuccessNotification("Task deleted successfully");
			this.getTodos();
		  })
		  .catch(error => {
			console.log(error);
	
			this.setState({
			  isDeletingTask: false
			});
	
			openErrorNotification("An error occurred. Please try again")
		  });
	  };

	  

	render() {
		const { isLoadingTodos, todoList, isDeletingTask, isUpdatingTask, showForm, showEditForm,selectedData } = this.state;
	
		return (
		  <div>
		  <React.Fragment>
			<TableWrapper>
			  <nav>
				<div className="row">
				  <div className="col-md-6">
					<h2> Tasks </h2>
				  </div>
				  <div className="col-md-6">
					<div className="col-md-offset-8 col-md-4">
					  <button className="btn-filter pointer pull-right" onClick={this.showForm}>
						<Icon type="plus" theme="outlined" /> Add Plan
					  </button>
					</div>
				  </div>
				</div>
			  </nav>
			  { 
			  showEditForm ? 
			  <div> <Icon type="rollback" className={'pointer'} style={{fontSize: "36px"}} onClick={this.hideEditForm} /><EditTodoform  data={selectedData}/> </div> :
			  showForm ?
			   <div> <Icon type="rollback" className={'pointer'} style={{fontSize: "36px"}} onClick={this.hideForm} /><Todoform user_id= {this.props.match.params.user_id}/> </div> : (isLoadingTodos ? (
				<Loader />
			  ) : !todoList.length ? (
				<NoResults />
			  ) : (
				<table>
				  <thead>
					<tr key={1}>
					  <th>{}</th>
					  <th className="text-center">Task</th>
					  <th className="text-center">Status</th>
					  <th className="text-center">Id</th>
					  <th className="text-center">User</th>
					  <th className="text-center">Action</th>
					  <th className="text-center">Action</th>
					</tr>
				  </thead>
				  <tbody>
					{todoList.map(
					  (
						{
						  id,
						  description,
						  state,
						  user_id
						},
						i
					  ) => {
						return (
						  <tr key={i}>
							<td className="text-center">{i + 1}</td>
							<td className="text-center">
							  {description}
							</td>
							<td className="text-center">{state}</td>
							<td className="text-center">{id}</td>
							<td className="text-center">
							  {user_id}
							</td>
							<td className="text-center">
							  <button
								className="btn-danger btn-block mt-2 pointer"
								disabled={isDeletingTask}
								onClick={() => this.deleteTask(id, user_id)}
							  >
								Delete
							  </button>
							</td>
							<td className="text-center">
							  <button
								className="btn-primary btn-block mt-2 pointer"
								disabled={isUpdatingTask}
								onClick={() => this.showEditForm(id,
									description,
									state,
									user_id)}
							  >
								Edit
							  </button>
							</td>
						  </tr>
						);
					  }
					)}
				  </tbody>
				</table>
			  ))}
			</TableWrapper>
		  </React.Fragment>
		  </div>
		);
	  }
}

export default withRouter(UserTodos);
