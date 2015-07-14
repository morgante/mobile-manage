"use strict";

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView
} = React;

var BUTLER_URI = "http://butler.somespider.com/stories";

var MobileManage = React.createClass({
	getInitialState: function() {
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: function(row1, roe2) {
					return row1 !== row2;
				}
			}),
			loaded: false
		};
	},
	componentDidMount: function() {
		this.fetchData();
	},
	fetchData: function() {
		fetch(BUTLER_URI)
			.then(response => response.json())
			.then(data => {
				console.log("data", data);
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(data),
					loaded: true
				});
			});
	},
	render: function() {
		if (!this.state.loaded) {
			return (
				<View style={styles.container}>
					<Text>
						Loading data...
					</Text>
				</View>
      		)
		} else {
			return (
				<View style={styles.container}>
					<Text>
						Loaded data...
					</Text>
				</View>
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

AppRegistry.registerComponent('MobileManage', () => MobileManage);
