export const DEFAULT_METRIC = 'obese';
export const DEFAULT_SEX = 'both';
export const DEFAULT_YEAR = '2013';

export const ALT_METRIC = DEFAULT_METRIC === 'obese'
  ? 'overweight'
  : 'obese';

export const DATA_URL = './us_data.csv';

export const SEX_MAP = {
  both: 'individuals',
  female: 'females',
  male: 'males'
};

export const CHART_OPTIONS = {
  xProp: 'age_start',
  yProp: 'mean',
  chartWidth: 600,
  chartHeight: 300,
  chartPadding: 40,
  barPadding: 0.1,
  yAxisTicks: 6,
  yAxisFormat: '%',
  easeDuration: 1000,
  easeType: 'easeExp'
};
