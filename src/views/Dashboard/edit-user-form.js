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

class EditUserform extends Component {
  state = {
    users: [],
    formData: {
        name: this.props.name,
        user_id: this.props.user_id,
        id: this.props.id
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
    isUpdatingTask: true
  });
 
  axios
    .patch(
  	`${config.USER_API_BASE_URL}/api/users/edit/${this.state.formData.id}`,
     {
         name: this.state.formData.name
        }
    )
    .then(res => {
  	this.setState({
  		isUpdatingTask: false
  	});

  	openSuccessNotification("User updated successfully");
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

    const { user_id, id, ...dat } = formData;

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

    console.log('====================================');
    console.log(this.props.name);
    console.log('====================================');


    return (
      <AllTodosWrapper>
        <div className="row">
          <div className="col-md-6">
            <form className="holiday-form input-pane text-left">
             
              <div className="field">
                <label>Fullname</label>
                <input
                  className="input-field"
                  name="name"
                  value={name}
                  onChange={e => this.handleChange("name", e)}
                ></input>
               
              </div>
             
              <div className="row">
                <div className="col-md-8">
                  <button
                    type="button"
                    className="btn-primary btn-block mt-2 pointer"
                    onClick={this.submitForm}
                    disabled={!this.validateForm()}
                  >
                    <Icon type="check" theme="outlined" /> Update User
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </AllTodosWrapper>
    );
  }
}

export default EditUserform;
