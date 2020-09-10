import initialState from '../../store/initialState';
import districtReducer from './displayDistrictReducer';
import provinceReducer from './displayProvinceReducer';
import sectorReducer from './displaySectorReducers';

const displayDistrict = (state = initialState, action) => {
  const location = districtReducer(state, action);

  return location || state;
};
const displayProvince = (state = initialState, action) => {
  const location = provinceReducer(state, action);

  return location || state;
};
const displaySector = (state = initialState, action) => {
  const location = sectorReducer(state, action);

  return location || state;
};

export default {displayDistrict, displayProvince, displaySector};
