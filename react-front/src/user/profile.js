import React, { Component } from 'react';
import { isAuthenticated } from '../core/Menu';
import { Redirect, Link } from 'react-router-dom';
import { read } from './apiUser';
class profile extends Component {
   constructor() {
      super()
      this.state = {
         user: "",
         redirectTosignin: false
      }
   }

   // methord that fetches user id with his content
   init = userId => {
      const token = isAuthenticated().token
      read(userId, token)
         .then(data => {
            if (data.error) {
               this.setState({
                  redirectTosignin: true

               })
            } else {
               console.log(data)
               this.setState({
                  user: data
               })
            }
         })

   }



   componentDidMount() {
      const userId = this.props.match.params.userId;
      this.init(userId);
   }
   render() {
      const { redirectTosignin, user } = this.state
      if (redirectTosignin) {
         return <Redirect to="/signin" />
      }
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <h2 className="mt-5 mt-5">Profile </h2>
                  <p>Hello {isAuthenticated().user.name} <small style={{ color: "green" }}> - {isAuthenticated().user.email}</small></p>
                  <p>{`joined ${
                     new Date(user.created).toDateString()
                     }`}</p>
                  <hr></hr>
                  {isAuthenticated().user &&
                     isAuthenticated().user._id == user._id && (
                        <div className="d-inline mt-5">
                           <Link
                              className="btn btn-raised btn-primary mr-2" to={`/user/edit/${user._id}`}>
                              Edit Profile
                        </Link>
                           <button className="btn btn-raised btn-danger">
                              Delete Profile
                        </button>

                        </div>
                     )}
               </div>
               <div className="col-md-6">

               </div>
            </div>


         </div>
      )
   }
}

export default profile;