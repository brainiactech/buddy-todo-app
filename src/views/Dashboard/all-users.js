import React, {Component} from "react"
import {TableWrapper} from "../../styles/common.styles"
import axios from "axios";
import * as S from "./user-style";
import {Link} from "react-router-dom";
 import {Icon} from "antd";
 import Userform from "./user-form"
 import EditUserform from "./edit-user-form"
 import Loader from "../../components/Loader";
 import NoResults from "../../components/NoResults";
 import { openSuccessNotification, openErrorNotification } from "../../utils/Notification";
 import config from '../../config'


class allUsers extends Component {

  state = {
    users: [],
    showUserForm: false,
    showUserEditForm: false,
    name: "",
    id: ""
  };

  getUsers = async () => {
    this.setState({
      isLoadingUsers: true
    })
		axios
      .get(`${config.USER_API_BASE_URL}/api/users/list`)
      .then(({data}) => {
        this.setState({
          isLoadingUsers: false
        })
        const allUsers = data.data.users
        // const users = allUsers.map((usse) =>{
        //   return {
        //     name: usse.name,
        //     id: usse.id
        //   };
        // })
        this.setState({users: allUsers});
      })
      .catch(err => err);
	  };

  componentDidMount() {
    this.getUsers()
  }

  showUserForm = () => {
		this.setState({
		  showUserForm: true
		})
	  }

	  hideUserForm = () => {
		this.setState({
		  showUserForm: false
		})
	  }

	  showUserEditForm = ( id,
		name) => {
		this.setState({
			name: name,
			id: id,
		  showUserEditForm: true
		})
	  }

	  hideEditForm = () => {
		this.setState({
		  showUserEditForm: false
		})
	  }

	  deleteUser = (id) => {
		this.setState({
		  isDeletingUser: true
		});
	   
		axios
		  .delete(
			`${config.USER_API_BASE_URL}/api/users/remove/${id}`
		  )
		  .then(res => {
			this.setState({
			  isDeletingUser: false
			});
	
			openSuccessNotification("User deleted successfully");
			this.getUsers();
		  })
		  .catch(error => {
			console.log(error);
	
			this.setState({
			  isDeletingUser: false
			});
	
			openErrorNotification("An error occurred. Please try again")
		  });
	  };

	  

	render() {
		const { isLoadingUsers, users, isDeletingUser, showUserForm, showUserEditForm, name, id } = this.state;

	
		return (
		  <div>
		  <React.Fragment>
			<TableWrapper>
			  <nav>
				<div className="row">
				  <div className="col-md-6">
					<h2> Users </h2>
				  </div>
				  <div className="col-md-6">
					<div className="col-md-offset-8 col-md-4">
					  <button className="btn-filter pointer pull-right" onClick={this.showUserForm}>
						<Icon type="plus" theme="outlined" /> Add New User
					  </button>
					</div>
				  </div>
				</div>
			  </nav>
			  { 
			  showUserEditForm ? 
			  <div> <Icon type="rollback" className={'pointer'} style={{fontSize: "36px"}} onClick={this.hideEditForm} /><EditUserform id={id} name={name} /> </div> :
			  showUserForm ?
			   <div> <Icon type="rollback" className={'pointer'} style={{fontSize: "36px"}} onClick={this.hideUserForm} /><Userform/> </div> : (isLoadingUsers ? (
				<Loader />
			  ) : !users.length ? (
				<NoResults />
			  ) : (
				<table>
				  <thead>
					<tr key={1}>
					  <th>{}</th>
					  <th className="text-center">Name</th>
            <th className="text-center">ID</th>
					  <th className="text-center">Action</th>
					  <th className="text-center">Action</th>
					</tr>
				  </thead>
				  <tbody>
					{users.map(
					  (
						{
						  id,
						  name
						},
						i
					  ) => {
						return (
						  <tr key={i}>
							<td className="text-center">{i + 1}</td>
							<td className="text-center">
                <Link to={`/user-todos/${id}`}>
                 <S.Name>{name}</S.Name>
               </Link>
							</td>
							<td className="text-center">{id}</td>
							<td className="text-center">
							  <button
								className="btn-danger btn-block mt-2 pointer"
								disabled={isDeletingUser}
								onClick={() => this.deleteUser(id)}
							  >
								Delete
							  </button>
							</td>
							<td className="text-center">
							  <button
								className="btn-primary btn-block mt-2 pointer"
								onClick={() => this.showUserEditForm(id,
                  name)}
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

export default (allUsers);
