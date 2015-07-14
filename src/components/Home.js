"use strict";

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView
} = React;

var List = require("./List");

var BUTLER_URI = "http://butler.somespider.com/stories";

var Home = React.createClass({
	getInitialState: function() {
		return {
			stories: [],
			loaded: false
		};
	},
	componentDidMount: function() {
		console.log("mounted it!");
		this.fetchData();
	},
	fetchData: function() {
		fetch(BUTLER_URI)
			.then(response => response.json())
			.then(data => {
				this.setState({
					stories: data,
					loaded: true
				});
			});
	},
	render: function() {
		if (!this.state.loaded) {
			return (
				<View style={styles.container}>
					<Text>
						Loading data.......
					</Text>
				</View>
      		)
		} else {
			return (
				<List stories={this.state.stories} navigator={this.props.navigator} />
      		)
		}
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

module.exports = Home;
