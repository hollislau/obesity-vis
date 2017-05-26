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

  loadSrcData = () => {
    d3.csv('./us_data.csv', (err, data) => {
      if (err) return console.log(`Unable to load source data: ${ err }`);

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
        row.metric === metric &&
        row.age_group_id <= 34
      )
    );
  }

  setChartData = () => {
    this.setState({ chartData: this.filterData() });
  }

  componentDidMount() {
    this.loadSrcData();
  }

  render() {
    const { chartData, year } = this.state;

    return (
      chartData &&
      <section>
        <h2>Prevalence of overweight individuals in the U.S. in { year }, by age</h2>
        <Histogram
          chartData={ chartData }
          { ...styles }
        />
      </section>
    );
  }
}

export default Chart;
