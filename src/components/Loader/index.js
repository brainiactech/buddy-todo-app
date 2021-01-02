import React from "react";
const spinner = require('./../../assets/loaderButton.svg');

const Loader = () => {
    return <div className="loading-pane">
        <img className="img-fluid" src={spinner} alt='Loading...'/>
    </div>
};

export default Loader;