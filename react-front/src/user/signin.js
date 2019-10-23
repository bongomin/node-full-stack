import React, { Component } from "react"

class Signin extends Component {

   // ceraeting a state
   constructor() {
      super()
      this.state = {
         email: "",
         password: "",
         error: "",
         redirectToReferer: false

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
      const { email, password } = this.state;
      const user = {
         email,
         password
      };

      this.signin(user);

   };

   signin = user => {
      return fetch("http://localhost:8080/signin", {
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
               //authenticate the user and redirect
            }
         })
         .catch(err =>
            console.log(err)

         )
   };
   signinForm = (email, password) => (
      < form >

         <div className="form-group">
            <label className="text-muted">Email</label>
            <input type="email" onChange={this.handleChange('email')} value={email} className="form-control"></input>
         </div>
         <div className="form-group">
            <label className="text-muted">password</label>
            <input type="password" onChange={this.handleChange('password')} value={password} className="form-control"></input>
         </div>
         <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">Signin</button>

      </form>
   )

   render() {
      // destructuring value state
      const { email, password, error } = this.state
      return (
         <div className="container">
            <div className="row mt-5 mb-5">
               <div className="col-8 m-auto">
                  <h2 className="mt-5 mt-5">Signin </h2>
                  <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                     {error}
                  </div>
                  <hr></hr>
               </div>
            </div>
            <div className="row">
               <div className="col-8 m-auto">
                  {this.signinForm(email, password)}
               </div>
            </div>

         </div >
      )
   }
}

export default Signin;


