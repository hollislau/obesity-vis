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
  width: 600,
  height: 300,
  padding: 40
};
