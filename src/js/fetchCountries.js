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
    return fetch(
      `${SearchCountries.#API_URL}${name}${this.#fieldsListToSearchString()}`
    )
      .then(response => {
        // if (!response.ok) {
        //   console.log(response, response.status);
        //   throw new Error(response.status);
        // }

        return response.json();
      })
      .catch(err => {
        console.log(err);
      });
  }
}
