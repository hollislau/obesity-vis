import React, { Component } from 'react';
import * as d3 from 'd3';
import Histogram from '../Histogram';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

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
      male: 'men',
      female: 'women',
      both: 'individuals'
    };
    const styles = {
      width: 600,
      height: 300,
      padding: 40
    };
    const radioList = ['male', 'female', 'both'];

    return (
      chartData &&
      <section>
        <h2>Prevalence of { metric } { sexMap[sex] } in the U.S. in { year }, by age</h2>
        <Histogram
          chartData={ chartData }
          { ...styles }
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
          list={ radioList }
          name='sex'
          selected={ sex }
          onChange={ this.handleChange }
        />
      </section>
    );
  }
}

export default Chart;
