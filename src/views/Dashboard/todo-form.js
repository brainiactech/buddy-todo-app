import React, { Component } from "react";
import axios from "axios";
import { AllTodosWrapper } from "./todos.style";
import { Icon } from "antd";
import TaskList from "./task-list";
import { openSuccessNotification, openErrorNotification } from "../../utils/Notification";
import config from '../../config'

const requestOptions = {
  headers: {
    "Content-Type": "application/json"
  }
};

class Todoform extends Component {
  state = {
    tasks: [],
    formData: {
      description: "",
      state: "",
      user_id: this.props.user_id
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

  addTask = () => {
    const { formData, tasks, edit, currentTask } = this.state;
    let tasksCopy = JSON.parse(JSON.stringify(tasks));

    if (edit) {
      tasksCopy[currentTask] = formData;
    } else {
      tasksCopy.push(formData);
    }

    this.setState({
      tasks: tasksCopy,
      formData: {
        description: "",
        state: this.state.formData.state,
        user_id: this.state.formData.user_id
      }
    });
  };

  editTask = index => {
    const { tasks } = this.state;

    this.setState({
      formData: tasks[index],
      currentTask: index,
      edit: true
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
      isSubmittingForm: true
    });

    let url;

    if(Array.isArray(this.state.tasks)){
      url = `${config.TODO_API_BASE_URL}/api/todo/bulk-create`
    }else{
      url = `${config.TODO_API_BASE_URL}/api/todo/create`
    }

    axios
      .post(
        `${url}`,
        this.state.tasks,
        requestOptions
      )
      .then(res => {
        this.setState({
          isSubmittingForm: false
        });

        openSuccessNotification("Your Todo list has been created successfully")
        this.resetForm();
        setTimeout(function(){  window.location.reload(false); }, 3000);
       
      })
      .catch(error => {
        console.log(error);

        this.setState({
          isSubmittingForm: false
        });

        openErrorNotification("An error occured. Please try again")
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
          <div className="col-md-5">
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
                <div className="col-md-4">
                  <button
                    type="button"
                    className="btn-cancel btn-block mt-2 pointer"
                    onClick={this.addTask}
                    disabled={!this.validateForm()}
                  >
                    {edit ? (
                      <>
                        <Icon type="edit" theme="outlined" /> Update Todo
                      </>
                    ) : (
                      <>
                        <Icon type="plus" theme="outlined" /> Add Todo
                      </>
                    )}
                  </button>
                </div>
                <div className="col-md-8">
                  <button
                    type="button"
                    className="btn-primary btn-block mt-2 pointer"
                    onClick={this.submitForm}
                  >
                    <Icon type="check" theme="outlined" /> Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <TaskList
            tasks={tasks}
            editTask={this.editTask}
            removeTask={this.removeTask}
          />
        </div>
      </AllTodosWrapper>
    );
  }
}

export default Todoform;
