import React, { Component } from "react";
import withMouse from "./withMouse";
import measureTime from "./measureTime";
import fetchData from "./fetchData";

class App extends Component {
  render() {
    const { mouse, seconds, loading, data } = this.props;

    if (loading) {
      return <div> Loading ... </div>;
    }

    return (
      <div
        style={{
          height: "100vh",
          cursor: "crosshair"
        }}
      >
        <h3> Seconds passed: {seconds} </h3>

        {data && <div> Fetched data: {JSON.stringify(data, null, 2)} </div>}

        <div>
          {mouse ? (
            <h1>
              Mouse is at ({mouse.x}, {mouse.y})
            </h1>
          ) : (
            <h1>Wait for it!</h1>
          )}
        </div>
      </div>
    );
  }
}

const AppWithMouse = fetchData("https://swapi.co/api/people/1")(
  measureTime(withMouse(App))
);

export default AppWithMouse;
