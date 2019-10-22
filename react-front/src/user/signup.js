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

   // method that handles on change
   handleChange = (name) => (event) => {
      // note: this syntax will work for all the three input fields
      this.setState({ [name]: event.target.value })
   }
   render() {
      // destructuring value state
      const { name, email, password } = this.state
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
                        <input type="text" onChange={this.handleChange('name')} value={name} className="form-control"></input>
                     </div>
                     <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input type="email" onChange={this.handleChange('email')} value={email} className="form-control"></input>
                     </div>
                     <div className="form-group">
                        <label className="text-muted">password</label>
                        <input type="password" onChange={this.handleChange('password')} value={password} className="form-control"></input>
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


