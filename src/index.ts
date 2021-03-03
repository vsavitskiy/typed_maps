import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const mapContainer = document.getElementById('map');
const map = new CustomMap(mapContainer, {
  zoom: 10,
  center: company.location,
});

map.addMarker(user);
map.addMarker(company);
