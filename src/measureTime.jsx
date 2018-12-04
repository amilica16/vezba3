import React, { Component } from "react";

const measureTime = Component => {
  return class ModifiedComponent extends Component {
    state = { seconds: 0 };

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(state => ({ seconds: state.seconds + 1 }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return <Component {...this.props} seconds={this.state.seconds} />;
    }
  };
};

export default measureTime;
