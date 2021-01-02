import React, { Component } from "react";
import axios from "axios";
import { AllTodosWrapper } from "./todos.style";
import { Icon } from "antd";
import UserList from "./user-list";
import { openSuccessNotification, openErrorNotification } from "../../utils/Notification";
import config from '../../config'

const requestOptions = {
  headers: {
    "Content-Type": "application/json"
  }
};

class Userform extends Component {
  state = {
    users: [],
    formData: {
      name: ""
    }
  };

  resetForm = () => {
    this.setState({
      formData: {
        name: ""
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

  addUser = () => {
    const { formData, users, edit, currentTask } = this.state;
    let usersCopy = JSON.parse(JSON.stringify(users));

    if (edit) {
        usersCopy[currentTask] = formData;
    } else {
        usersCopy.push(formData);
    }

    this.setState({
        users: usersCopy,
      formData: {
        name: this.state.formData.name
      }
    });
  };

  editUser = index => {
    const { users } = this.state;

    this.setState({
      formData: users[index],
      currentTask: index,
      edit: false
    });
  };

  removeUser = index => {
    const users = JSON.parse(JSON.stringify(this.state.users));
    users.splice(index, 1);

    this.setState({
        users
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.setState({
      isSubmittingForm: true
    });

    axios
      .post(
        `${config.USER_API_BASE_URL}/api/users/bulk-create`,
        this.state.users,
        requestOptions
      )
      .then(res => {
        this.setState({
          isSubmittingForm: false
        });

        openSuccessNotification("User list has been created successfully")
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

    const {  ...dat } = formData;

    return Object.values(dat).every(val => val && val.toString().trim());
  };


  componentDidMount() {
    
  }

  render() {
    const {  users, formData, edit } = this.state;
    const {
      id,
      name,
    } = formData;


    return (
      <AllTodosWrapper>
        <div className="row">
          <div className="col-md-5">
            <form className="holiday-form input-pane text-left">
              <div className="field">
                <label>Fullname</label>
                <textarea
                  className="input-field"
                  name="name"
                  value={name}
                  onChange={e => this.handleChange("name", e)}
                ></textarea>
               
              </div>
             
              <div className="row">
                <div className="col-md-4">
                  <button
                    type="button"
                    className="btn-cancel btn-block mt-2 pointer"
                    onClick={this.addUser}
                    disabled={!this.validateForm()}
                  >
                    {edit ? (
                      <>
                        <Icon type="edit" theme="outlined" /> Update Task
                      </>
                    ) : (
                      <>
                        <Icon type="plus" theme="outlined" /> Add Task
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

          <UserList
            users={users}
            editUser={this.editUser}
            removeUser={this.removeUser}
          />
        </div>
      </AllTodosWrapper>
    );
  }
}

export default Userform;
