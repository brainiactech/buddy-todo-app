import React from "react"

const spinner = require('./../../assets/loaderButton.svg');

const ModalLoader = () => {
  return <div className="col-md-12 text-center" style={{marginTop: '30px'}}>
    <img className="img-fluid" src={spinner} alt='Loading...'/>
  </div>
};

export default ModalLoader;