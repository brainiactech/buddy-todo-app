import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Sidebar from './../components/Sidebar';
import Navbar from "../components/Navbar";

import {DashboardWrapper} from './../styles/common.styles';
import {
    PageNotFound,
    Dashboard,
    TodoForm,
    UserTodos
} from '../views';

class AdminUserDashboardContainer extends Component {

    render() {
        const path = this.props.location.pathname;

        return (
            <DashboardWrapper>
                <div className="container">
                    <Sidebar path={path}/>
                    <div className="main">
                        <Navbar/>
                        <div className="content">
                            <Switch>
                                <Route exact path="/home" component={Dashboard}/>
                                <Route path="/todo/add" component={TodoForm}/>
                                <Route path="/todo/edit/:id" component={TodoForm}/>
                                <Route path="/user-todos/:user_id" exact component={UserTodos} />

                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </DashboardWrapper>
        );
    }
}

export default withRouter(AdminUserDashboardContainer)
