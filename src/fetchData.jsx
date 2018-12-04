import React, { Component } from "react";

const fetchData = url => Component => {
  return class ModifiedComponent extends Component {
    state = { loading: false, data: null };

    componentDidMount() {
      this.setState({ loading: true });

      setTimeout(() => {
        this.setState({
          loading: false,
          data: [
            {
              name: "kristijan"
            },
            {
              name: "igor"
            },
            {
              name: "ivan"
            }
          ]
        });
      }, 1500);
    }

    render() {
      return (
        <Component
          {...this.props}
          loading={this.state.loading}
          data={this.state.data}
        />
      );
    }
  };
};

export default fetchData;
