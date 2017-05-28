import React, { Component } from 'react';
import * as d3 from 'd3';
import BarChart from '../BarChart';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

// TODO only use needed d3 modules
// TODO create options object to pass as prop to BarChart
// TODO make input options dynamic

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
      item => (
        item.year === year &&
        item.sex === sex &&
        item.metric === metric &&
        item.age_group_id <= 34
      )
    );
  }

  getInputOptions = (prop) =>
    srcData.map(item => item[prop])
      .sort()
      .filter((item, i, arr) => item !== arr[i - 1]);

  setChartData = () => {
    this.setState({ chartData: this.filterData() });
  }

  handleChange = e => {
    const { target } = e;
    const { type, name } = target;
    const isCheckbox = type === 'checkbox';

    let value = isCheckbox ? target.checked : target.value;

    if (isCheckbox) {
      if (value) {
        value = 'obese';
      } else {
        value = 'overweight';
      }
    }

    this.setState({ [name]: value }, this.setChartData);
  }

  componentDidMount() {
    this.loadSrcData();
  }

  render() {
    const { chartData, year, sex, metric } = this.state;
    const sexMap = {
      male: 'males',
      female: 'females',
      both: 'individuals'
    };
    const chartStyles = {
      width: 600,
      height: 300,
      padding: 40
    };

    return (
      chartData &&
      <section>
        <h2>Prevalence of { metric } { sexMap[sex] } in the U.S. in { year }, by age</h2>
        <BarChart
          chartData={ chartData }
          { ...chartStyles }
        />
        <Checkbox
          name='metric'
          selected={ metric }
          setting='obese'
          onChange={ this.handleChange }
        >
          Obesity only
        </Checkbox>
        <Radio
          list={ this.getInputOptions('sex') }
          name='sex'
          selected={ sex }
          onChange={ this.handleChange }
        />
      </section>
    );
  }
}

export default Chart;
