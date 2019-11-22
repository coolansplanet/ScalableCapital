import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./Menu";
import Selectors from "./Selectors";
import { routes } from "../constants";
import { getCones } from "../provider";
import "./App.scss";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      riskLevel: 10,
      years: 10,
      initialSum: 10000,
      monthlySum: 200,
      data: []
    };
  }
  componentDidMount() {
    getCones()
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const onChange = (id, value) => {
      this.setState({ [id]: value });
    };
    return (
      <Router>
        <div className="app">
          <Menu />
          <Selectors
            onChange={(id, value) => {
              onChange(id, value);
            }}
            appState={this.state}
          />
          {routes.map(oneRoute => {
            const { exact, path, component: Component } = oneRoute;
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={() => <Component {...this.state} />}
              />
            );
          })}
        </div>
      </Router>
    );
  }
}
