var React = require('react-native');

var {
	Text,
	View,
	ListView,
	StyleSheet
} = React;

var StoryCard = require("./StoryCard");

var List = React.createClass({
	getData: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return ds.cloneWithRows(this.props.stories);
	},
	render: function() {
		var data = this.getData();
		return (
			<View style={styles.container}>
				<ListView
					dataSource={data}
					renderRow={this.renderRow}
				/>
			</View>
  		)
	},
	renderRow: function(data) {
		return (
			<StoryCard story={data} navigator={this.props.navigator} />
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

module.exports = List;
