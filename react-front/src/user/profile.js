import React, { Component } from 'react';
import { isAuthenticated } from '../core/Menu';
class profile extends Component {
   constructor() {
      super()
      this.state = {
         user: "",
         redirectTosignin: false
      }
   }
   componentDidMount() {
      console.log("user id from route param", this.props.match.params.userId)
   }
   render() {
      return (
         <div className="container">
            <h2 className="mt-5 mt-5">Profile </h2>
            <p>Hello {isAuthenticated().user.name} <small style={{ color: "green" }}> - {isAuthenticated().user.email}</small></p>
            <hr></hr>


         </div>
      )
   }
}

export default profile;