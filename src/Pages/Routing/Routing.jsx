import React from "react";
import "./Routing.scss";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { Dashboard } from "../Dashboard/Dashboard";
import Profile from "../Profile/Profile";

export const Routing = (props) => {
  return (
    <div className="Routing">
      <div>
        <Header ToggleSidebar={props.ToggleSidebar} />
      </div>
      <div className="route-body">
        <div className="rbody">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
