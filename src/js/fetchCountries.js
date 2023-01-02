export class SearchCountries {
  static #API_URL = 'https://restcountries.com/v3.1/name/';
  #fldList = [];

  constructor(fldList) {
    this.#fldList.push(...fldList);
  }

  #fieldsListToSearchString() {
    if (this.#fldList.length == 0) return '';

    return `?fields=${this.#fldList.join(',')}`;
  }

  fetchCountries(name) {
    const search = name.trim();
    if (search === '') {
      return Promise.resolve([]);
    }

    return fetch(
      `${SearchCountries.#API_URL}${search}${this.#fieldsListToSearchString()}`
    ).then(response => {
      if (!response.ok) {
        return Promise.reject(response);
      }

      return response.json();
    });
  }
}
