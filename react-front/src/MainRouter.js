import React from "react"

import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/signup";
import Signin from "./user/signin";
import Menu from "./core/Menu"
import profile from "./user/profile"



const MainRouter = () => (
   <div>
      <Menu />
      <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/signup" component={Signup}></Route>
         <Route exact path="/signin" component={Signin}></Route>
         <Route exact path="/user/:userid" component={profile}></Route>
      </Switch>
   </div>

)

export default MainRouter;