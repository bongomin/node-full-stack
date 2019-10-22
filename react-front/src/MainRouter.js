import React from "react"

import { Route, Switch } from "react-router-dom"
import Home from "./core/Home"
import Signup from "./user/signup"


const MainRouter = () => (
   <div>
      <switch>

         <Route exact path="/" component={Home}></Route>
         <Route exact path="/signup" component={Signup}></Route>

      </switch>
   </div>

)

export default MainRouter;