/** @jsx React.DOM */
var React = require('react');
var Store = require('./store/Store.js');
var Actions = require('./actions/Actions.js');
var Dispatcher = require('./dispatcher/Dispatcher.js');

var App = React.createClass({
  getInitialState: function () {
    return {
      urls: Store.getUrls(),
      newUrl: ''
    };
  },
  componentWillMount: function () {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function () {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function () {
    this.setState({
      urls: Store.getUrls()
    });
  },
  addUrl: function (event) {
    event.preventDefault();
    var input = this.refs.newUrl.getDOMNode();
    Actions.addUrl(input.value);
    this.setState({
      newUrl: ''
    });
  },
  updateUrl: function (event) {
    this.setState({
      newUrl: event.target.value
    });
  },
  renderUrls: function (url) {
    return (
      <div>{url}</div>
    );
  },
	render: function() {
		return (
			<div>
        {this.state.urls.map(this.renderUrls)}
        <form onSubmit={this.addUrl}>
          <label>Add Elasticsearch URL</label>
          <input ref="newUrl" type="text" value={this.state.newUrl} onChange={this.updateUrl}/>
        </form>
      </div>
		);
	}

});

module.exports = App;
