import React, { Component } from 'react';
import * as d3 from 'd3';
import Histogram from '../Histogram';

const styles = {
  width: 500,
  height: 300,
  padding: 30
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  fetchData() {
    d3.csv('./obesity_us_data.csv', (err, data) => {
      if (err) console.log(`Unable to fetch data: ${ err }`);

      this.setState({ data });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;

    return (
      data && <Histogram />
    );
  }
}

export default Chart;
