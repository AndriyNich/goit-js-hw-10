export class Listener {
  #DEBOUNCE_DELAY = 300;
  #debounce = require('lodash.debounce');

  constructor({ selectorSource, callBack }) {
    console.log(selectorSource);
    document
      .querySelector(selectorSource)
      .addEventListener(
        'input',
        this.#debounce(callBack, this.#DEBOUNCE_DELAY)
      );
  }
}
