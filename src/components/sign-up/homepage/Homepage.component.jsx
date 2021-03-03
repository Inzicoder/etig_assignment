import React, { Component } from 'react';
import './Homepage.styles.scss';
import {  Link} from "react-router-dom";
import { FaUserCircle  } from "react-icons/fa"


class HomePage extends Component{
    render(){
        return(
            <div className="homepage"> 
   
              {/* <img src="https://images.unsplash.com/photo-1614450770504-8fe221e74881?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
              <h3>WELCOME HERE</h3>
              {/* <h3>We hope you are fine</h3> */}
             <Link to="/SignIn" className="Sign-In">
                 <FaUserCircle />
                 SignIn
             </Link>
             <Link to="/SignUp" className="Sign-Up">
                 SignUp
             </Link>
            </div>
        )
    }
}

export default HomePage