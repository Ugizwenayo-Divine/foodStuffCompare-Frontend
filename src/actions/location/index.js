import provinceActions from './provinceActions';
import districtActions from './districtActions';
import sectorActions from './sectorActions';

const {
  getAllProvinces,
} = provinceActions;
const {
  getAllByDistrict,
  getAllSectors,
} = sectorActions;
const {
  getAll,
  getAllByProvince
} = districtActions;
export default {
  getAll,
  getAllByDistrict,
  getAllByProvince,
  getAllProvinces,
  getAllSectors,
};