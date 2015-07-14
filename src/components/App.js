"use strict";

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView,
	NavigatorIOS
} = React;

var Home = require("./Home");

var App = React.createClass({
	render: function() {
		return (
			<NavigatorIOS style={styles.navigator}
				initialRoute={{
					component: Home,
					title: 'Home',
					passProps: {}
				}} />
		);
	}
});

var styles = StyleSheet.create({
	navigator: {
		flex: 1
	}
});

module.exports = App;
