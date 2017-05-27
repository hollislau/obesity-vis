import React, { Component } from 'react';
import * as d3 from 'd3';
import Histogram from '../Histogram';

const styles = {
  width: 700,
  height: 350,
  padding: 40
};

const sexMap = {
  male: 'men',
  female: 'women',
  both: 'individuals'
};

let srcData;

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: null,
      year: '2013',
      sex: 'both',
      metric: 'overweight',
      showObesity: false
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
      item => (
        item.year === year &&
        item.sex === sex &&
        item.metric === metric &&
        item.age_group_id <= 34
      )
    );
  }

  setChartData = () => {
    this.setState({ chartData: this.filterData() });
  }

  handleChange = e => {
    const { target } = e;
    const { type, name } = target;
    const isCheckbox = type === 'checkbox';
    const value = isCheckbox ? target.checked : target.value;
    const updatedState = { [name]: value };

    if (isCheckbox) {
      if (value) {
        updatedState.metric = 'obese';
      } else {
        updatedState.metric = 'overweight';
      }
    }

    this.setState(updatedState, this.setChartData);
  }

  componentDidMount() {
    this.loadSrcData();
  }

  render() {
    const { chartData, year, sex, metric, showObesity } = this.state;

    return (
      chartData &&
      <section>
        <h2>Prevalence of { metric } { sexMap[sex] } in the U.S. in { year }, by age</h2>
        <Histogram
          chartData={ chartData }
          { ...styles }
        />
      <label>
        Obesity only
        <input
          name='showObesity'
          type='checkbox'
          checked={ showObesity }
          onChange={ this.handleChange }
        />
      </label>
      </section>
    );
  }
}

export default Chart;
