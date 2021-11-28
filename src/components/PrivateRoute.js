import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom";
import {VideoContext} from '../context/VideoState';


export default function PrivateRoute({ component: Component, ...rest }) {
    const {loggedIn} = useContext(VideoContext);

  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }}
    ></Route>
  )
}