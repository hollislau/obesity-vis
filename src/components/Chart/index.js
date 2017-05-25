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

    this.srcData = [];
    this.state = {
      chartData: null,
      year: '2013'
    };
  }

  fetchSrcData = () => {
    d3.csv('./us_data.csv', (err, data) => {
      if (err) return console.log(`Unable to fetch source data: ${ err }`);

      this.srcData = data;
      this.setChartData();
    });
  }

  filterDataByYear = () => {
    const { year } = this.state;

    return this.srcData.filter(row => row.year === year);
  }

  setChartData = () => {
    this.setState({ chartData: this.filterDataByYear() });
  }

  componentDidMount() {
    this.fetchSrcData();
  }

  render() {
    const { chartData, year } = this.state;

    return (
      chartData &&
      <div>
        <h1>Prevalence of overweight individuals in the U.S. in { year }, by age</h1>
        <Histogram { ...this.state } { ...styles }/>
      </div>
    );
  }
}

export default Chart;
