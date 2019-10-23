import React, { Component } from "react"

class Signup extends Component {

   // ceraeting a state
   constructor() {
      super()
      this.state = {
         name: "",
         email: "",
         password: "",
         error: "",
         open: false

      }
   }

   // method that handles on change
   handleChange = (name) => (event) => {
      this.setState({ error: "" }) //this is to clear old errors 
      // note: this syntax will work for all the three input fields
      this.setState({ [name]: event.target.value })
   };

   // clickSubmit method that submits to the database
   clickSubmit = event => {
      event.preventDefault()
      const { name, email, password } = this.state;
      const user = {
         name,
         email,
         password
      };

      this.signup(user);

   };

   signup = user => {
      return fetch("http://localhost:8080/signup", {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
         },
         body: JSON.stringify(user)
      })
         .then(response => response.json()
         )
         .then(data => {
            if (data.error) {
               this.setState({ error: data.error });
            }
            else {
               this.setState({
                  error: "",
                  name: "",
                  email: "",
                  password: "",
                  open: true

               })
            }
         })
         .catch(err =>
            console.log(err)

         )
   }
   render() {
      // destructuring value state
      const { name, email, password, error, open } = this.state
      return (
         <div className="container">
            <div className="row mt-5 mb-5">
               <div className="col-8 m-auto">
                  <h2 className="mt-5 mt-5">Signup </h2>
                  <div className="alert alert-primary" style={{ display: error ? "" : "none" }}>
                     {error}
                  </div>

                  <div className="alert alert-info" style={{ display: open ? "" : "none" }}>
                     New Account Created Buddy...You can Signin .
                  </div>
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
                     <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">Signup</button>

                  </form>
               </div>
            </div>

         </div >
      )
   }
}

export default Signup;


