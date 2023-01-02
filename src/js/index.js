import { Listener } from './listener';
import { DataControler } from './data-controler';
import { drawCountriesList } from './draw-data';

const dataControler = new DataControler();

const listener = new Listener({
  selectorSource: '#search-box',
  callBack: onSearch,
});

function onSearch(e) {
  dataControler.loadData(e.target.value).then(drawCountriesList);
}
