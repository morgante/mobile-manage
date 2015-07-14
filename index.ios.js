"use strict";

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView
} = React;

var App = require("./src/components/App");

var MobileManage = React.createClass({
	render: function() {
		return (
			<App />
		);
	}
});

AppRegistry.registerComponent('MobileManage', () => MobileManage);
