"use strict";

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ListView
} = React;

var Home = React.createClass({
	render: function() {
		var story = this.props.story;
		var author = story.author.name;
		var title = story.headline;
		var cover = story.featuredPhoto.url;
		return (
			<View style={styles.container}>
				<Text>
					{ title } by { author }
				</Text>
				<Image style={styles.cover}
					source={{uri: cover}}
				/>
			</View>
  		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	cover: {
		width: 300,
		height: 200
	}
});

module.exports = Home;
