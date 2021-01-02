import React, { Component } from "react";
import axios from "axios";
import { AllTodosWrapper } from "./todos.style";
import { Icon } from "antd";
import { openSuccessNotification, openErrorNotification } from "../../utils/Notification";
import config from '../../config'

const requestOptions = {
  headers: {
    "Content-Type": "application/json"
  }
};

function setBodyHeaders(params) {
    return {
      data: params
    }
  
  }

class EditTodoform extends Component {
  state = {
    tasks: [],
    formData: {
        description: this.props.data.description,
        user_id: this.props.data.user_id,
        state: this.props.data.state,
        id: this.props.data.id
    }
  };

  resetForm = () => {
    this.setState({
      formData: {
        description: "",
        state: ""
      }
    })
  }

  handleChange = (type, { target }, int) => {
      const value = int ? parseInt(target.value) : target.value;

    this.setState({
      formData: {
        ...this.state.formData,
        [type]: value
      }
    });
  };



  editTask = index => {
    const { tasks } = this.state;

    this.setState({
      formData: tasks[index],
      currentTask: index,
      edit: false
    });
  };

  removeTask = index => {
    const tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks.splice(index, 1);

    this.setState({
      tasks
    });
  };


  submitForm = e => {
    e.preventDefault();
    this.setState({
    isUpdatingTask: true
  });
 
  axios
    .patch(
  	`${config.TODO_API_BASE_URL}/api/todo/edit/${this.state.formData.id}`,
     {
         user_id: this.state.formData.user_id,
         description: this.state.formData.description,
         state: this.state.formData.state
        }
    )
    .then(res => {
  	this.setState({
  		isUpdatingTask: false
  	});

  	openSuccessNotification("Task updated successfully");
      setTimeout(function(){  window.location.reload(false); }, 3000);
    })
    .catch(error => {
  	console.log(error);

  	this.setState({
  		isUpdatingTask: false
  	});

  	openErrorNotification("An error occurred. Please try again")
    });
  };


  validateForm = () => {
    const { formData } = this.state;

    const { user_id, ...dat } = formData;

    return Object.values(dat).every(val => val && val.toString().trim());
  };


  componentDidMount() {

  }

  render() {
    const {  tasks, formData, edit } = this.state;
    const {
      state,
      description,
    } = formData;


    return (
      <AllTodosWrapper>
        <div className="row">
          <div className="col-md-6">
            <form className="holiday-form input-pane text-left">
              <div className="field">
                <label>Status</label>
                <select
                  className="select-field"
                  onChange={e => this.handleChange("state", e)}
                  value={state}
                >
                  <option value="">Select a Status</option>
                  
                      <option key="todo" value="todo">
                        Todo
                      </option>
                        <option key="done" value="done">
                        Done
                      </option>
                  
                </select>
                  
              </div>
             
              <div className="field">
                <label>Description</label>
                <textarea
                  className="input-field"
                  name="name"
                  value={description}
                  onChange={e => this.handleChange("description", e)}
                ></textarea>
               
              </div>
             
              <div className="row">
                <div className="col-md-8">
                  <button
                    type="button"
                    className="btn-primary btn-block mt-2 pointer"
                    onClick={this.submitForm}
                    disabled={!this.validateForm()}
                  >
                    <Icon type="check" theme="outlined" /> Update
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* <TaskList
            tasks={tasks}
            editTask={this.editTask}
            removeTask={this.removeTask}
          /> */}
        </div>
      </AllTodosWrapper>
    );
  }
}

export default EditTodoform;
