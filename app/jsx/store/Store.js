var flux = require('flux-react');
var actions = require('../actions/Actions.js');

module.exports = flux.createStore({
  urls: [],
  actions: [
    actions.addUrl
  ],
  addUrl: function (url) {
    this.urls.push(url);
    this.emitChange();
  },
  exports: {
    getUrls: function () {
      return this.urls;
    }
  }
});
