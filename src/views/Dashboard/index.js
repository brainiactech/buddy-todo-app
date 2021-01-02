import React, {Component} from "react";
import {AllTodosWrapper} from './todos.style';
import AllPlans from './all-users'
import {TabWrapper} from "../../styles/common.styles"

class PlannedTasksPage extends Component {
  state = {
    activeTab: 1
  }

  componentDidMount() {
  }

  switchTab = (activeTabId) => {
    this.setState({activeTab: activeTabId})
  }

  render() {

    return (
      <AllTodosWrapper>
        <React.Fragment>
          <TabWrapper>
           
            {  <button onClick={this.switchTab.bind(this, 1)} className={this.state.activeTab === 1 ? 'active' : ''}>
              All Users
            </button> }
          </TabWrapper>
          {
            
                this.state.activeTab === 1 ? <AllPlans/> 
                : null
          }
        </React.Fragment>
      </AllTodosWrapper>
    )
  }
}

export default (PlannedTasksPage);
