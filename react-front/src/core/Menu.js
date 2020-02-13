import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import('./Menu.css');

// .env variable holding (REACT_APP_API_URL) can be replaced with http://localhost:8080

const isActive = (history, path) => {
   if (history.location.pathname === path) return { color: "#ff9900" }
   else return { color: "#ffffff" }
}

export const signout = (next) => {
   if (typeof window !== "undefined") localStorage.removeItem("jwt")
   next()
   return fetch("http://localhost:8080/signout", {
      method: "GET"
   }).then(response => {
      console.log('signout', response)
      return response.json()
   })
      .catch(err => console.log(err))


}

export const isAuthenticated = () => {
   if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"))

   } else {
      return false
   }

}


const Menu = ({ history }) => (
   <div>
      <ul className="nav nav-tabs bg-primary">
         <li className="nav-item">
            <Link style={isActive(history, "/")} className="nav-link" to="/">Home</Link>
         </li>
         {!isAuthenticated() && (
            <>
               <li className="nav-item">
                  <Link style={isActive(history, "/signin")} className="nav-link" to="/signin">Signin</Link>
               </li>
               <li className="nav-item">
                  <Link style={isActive(history, "/signup")} className="nav-link" to="/signup">Register</Link>
               </li>
            </>

         )}
         {isAuthenticated() && (
            <>
               <li className="nav-item">
                  <a style={isActive(history, "/signup"), { cursor: "pointer", color: "#ff" }} onClick={() => signout(() => history.push('/'))} className="nav-link">
                     Signout
               </a>
               </li>

               <li className="nav-item pull-right">
                  <Link
                     className="nav-link" to={`/user/${isAuthenticated().user._id}`}

                     style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                  >
                     {`${isAuthenticated().user.name}'s profile`}
                  </Link>
               </li>
            </>


         )}
      </ul>
   </div>

)

export default withRouter(Menu);

