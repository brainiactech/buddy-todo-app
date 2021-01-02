import React, { PureComponent } from 'react'
import { ErrorWrapper } from './error.styles';

class Error404 extends PureComponent {
  render(){
    return (
      <ErrorWrapper>
        <div>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      </ErrorWrapper>
    )
  }
}

export default Error404;
