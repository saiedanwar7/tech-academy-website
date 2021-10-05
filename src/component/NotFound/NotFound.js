import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found text-center mt-5">
            <h1>404 !</h1>
            <h3>This Page Not Found</h3>
          <Link to="/"><button className="btn bg-info fw-bold mt-3">Go To Home</button></Link>
            
        </div>
    );
};

export default NotFound;