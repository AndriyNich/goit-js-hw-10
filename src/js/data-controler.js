import { SearchCountries } from './fetchCountries';
import { Notification } from './notification';

export class DataControler {
  #FIELDS_LIST = ['name', 'capital', 'population', 'languages', 'flags'];
  #search;
  #notification;

  constructor() {
    this.#notification = new Notification();
    this.#search = new SearchCountries(this.#FIELDS_LIST);
  }

  loadData(querySearch) {
    this.#checkData(
      this.#search.fetchCountries(querySearch).catch(err => {
        console.log(err);
      })
    );

    // .then(data => {
    //   // this.#checkData(response);
    //   console.log(data);
    // });
    // .catch(this.#onCatch);
  }

  #checkData(loadedData) {
    loadedData
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err.status);
      });
    // loadedData.then(response => console.log(response));
  }

  #onCatch(status) {
    console.log(status);
  }

  #sendMessageInfo() {
    this.#notification.sendNotification(
      Notification.tpNotification.info,
      'Too many matches found. Please enter a more specific name.'
    );
  }

  #sendMessageWarning() {
    this.#notification.sendNotification(
      Notification.tpNotification.warning,
      'Oops, there is no country with that name.'
    );
  }
}
