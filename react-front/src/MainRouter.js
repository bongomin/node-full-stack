import React from "react"

import { Route, Switch } from "react-router-dom"
import Home from "./core/Home"


const MainRouter = () => (
   <div>
      <switch>
         <Route path="/" component={Home}></Route>
      </switch>
   </div>

)

export default MainRouter;