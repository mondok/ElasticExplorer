/* @jsx React.DOM */

var React = require('react');
var App = require('../App.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          <App/>
        </p>
      </div>
    );
  }
});
