import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import { LoginWrapper } from './home.styles';
import {Link} from "react-router-dom";

class HomePage extends PureComponent {
  state = {
    state: ''
  }

  componentDidMount() {
    
  }

  render() {
    const LoginPage = (
      <div className="row middle-xs" style={{ height: '100vh' }}>
        <div className="col-md-12 team-background" style={{ height: '100vh' }}>
          <div className="row middle-sm" style={{ height: '100vh' }}>
            <div className="col-md-12">
              <div>
                <Icon className="robot" type="robot" />
              </div>
              <h1 style={{ color: '#fff' }}> 
              <Link to={`/home`}>
                Goto Dashboard
               </Link>
               </h1>
            </div>
          </div>
        </div>
      </div>
    ) 
    return (
      <LoginWrapper>
        {LoginPage}
      </LoginWrapper>
    )
  }
}

export default withRouter(HomePage);
