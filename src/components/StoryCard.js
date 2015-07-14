var React = require('react-native');

var {
	Text,
	View,
	ListView,
	StyleSheet,
	TouchableHighlight
} = React;

var StoryCard = React.createClass({
	onClick: function() {
		console.log("clicked", this.props.story);
	},
	render: function() {
		var story = this.props.story;
		var headline = story.headline;

		return (
			<TouchableHighlight onPress={this.onClick}>
				<Text>{headline}</Text>
			</TouchableHighlight>
		)
	}
});

module.exports = StoryCard;
