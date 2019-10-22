import React, { Component } from "react"

class Signup extends Component {

   // ceraeting a state
   constructor() {
      super()
      this.state = {
         name: "",
         email: "",
         password: "",
         error: ""

      }
   }
   render() {
      return (
         <div className="container">
            <div className="row mt-5 mb-5">
               <div className="col-8 m-auto">
                  <h2 className="mt-5 mt-5">Signup </h2>
                  <hr></hr>
               </div>
            </div>
            <div className="row">
               <div className="col-8 m-auto">
                  <form >
                     <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input type="text" className="form-control"></input>
                     </div>
                     <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input type="email" className="form-control"></input>
                     </div>
                     <div className="form-group">
                        <label className="text-muted">password</label>
                        <input type="password" className="form-control"></input>
                     </div>
                     <button className="btn btn-raised btn-primary">Signup</button>

                  </form>
               </div>
            </div>

         </div >
      )
   }
}

export default Signup;


