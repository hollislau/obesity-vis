import React, { Component } from 'react';
import * as d3 from 'd3';
import Histogram from '../Histogram';

const styles = {
  width: 500,
  height: 300,
  padding: 30
};

let srcData;

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: null,
      year: '2013',
      sex: 'both',
      metric: 'overweight'
    };
  }

  fetchSrcData = () => {
    d3.csv('./us_data.csv', (err, data) => {
      if (err) return console.log(`Unable to fetch source data: ${ err }`);

      srcData = data;
      this.setChartData();
    });
  }

  filterData = () => {
    const { year, sex, metric } = this.state;

    return srcData.filter(
      row => (
        row.year === year &&
        row.sex === sex &&
        row.metric === metric
      )
    );
  }

  setChartData = () => {
    this.setState({ chartData: this.filterData() });
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
        <Histogram
          chartData={ chartData }
          { ...styles }
        />
      </div>
    );
  }
}

export default Chart;
