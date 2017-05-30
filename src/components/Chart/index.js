import React, { Component } from 'react';
import * as d3 from 'd3';
import BarChart from '../BarChart';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Dropdown from '../Dropdown';
import {
  DEFAULT_METRIC,
  DEFAULT_SEX,
  DEFAULT_YEAR,
  ALT_METRIC,
  DATA_URL,
  SEX_ID,
  YEAR_ID,
  AGE_ID,
  AGE_GROUP,
  SEX_MAP,
  CHART_OPTIONS
} from '../../constants';
import './index.css';

// TODO only use needed d3 modules
// TODO add prop types
// TODO add snapshot tests

const capitalize = str =>
  str[0].toUpperCase() + str.slice(1);

let srcData;

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: null,
      radioOptions: null,
      dropdownOptions: null,
      metric: DEFAULT_METRIC,
      sex: DEFAULT_SEX,
      year: DEFAULT_YEAR
    };
  }

  loadSrcData = () => {
    d3.csv(DATA_URL, (err, data) => {
      if (err) return console.log(`Unable to load source data: ${ err }`);

      srcData = data;
      this.setState({
        radioOptions: this.getInputOptions(SEX_ID),
        dropdownOptions: this.getInputOptions(YEAR_ID)
      });
      this.setChartData();
    });
  }

  filterData = () => {
    const { metric, sex, year } = this.state;

    return srcData.filter(
      item => (
        item.metric === metric &&
        item.sex === sex &&
        item.year === year &&
        item[AGE_ID] <= AGE_GROUP
      )
    );
  }

  getInputOptions = prop =>
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
        value = ALT_METRIC;
      } else {
        value = DEFAULT_METRIC;
      }
    }

    this.setState({ [name]: value }, this.setChartData);
  }

  componentDidMount() {
    this.loadSrcData();
  }

  render() {
    const {
      chartData,
      radioOptions,
      dropdownOptions,
      metric,
      sex,
      year
    } = this.state;

    if (!chartData) {
      return (
        <section>
          <h2>Loading chart...</h2>
        </section>
      );
    }

    return (
      <section>
        <h2>Prevalence of { metric } { SEX_MAP[sex] } in the U.S. in { year }, by age</h2>
        <BarChart
          chartData={ chartData }
          { ...CHART_OPTIONS }
        />
        <div className="controls">
          <Checkbox
            name="metric"
            selected={ metric }
            setting={ ALT_METRIC }
            onChange={ this.handleChange }
          >
            { capitalize(ALT_METRIC) }
          </Checkbox>
          <Radio
            list={ radioOptions }
            capitalize={ capitalize }
            name="sex"
            selected={ sex }
            onChange={ this.handleChange }
          />
          <Dropdown
            list={ dropdownOptions }
            name="year"
            value={ year }
            onChange={ this.handleChange }
          />
        </div>
      </section>
    );
  }
}

export default Chart;
