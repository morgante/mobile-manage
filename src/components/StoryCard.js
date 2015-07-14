var React = require('react-native');

var {
	Text,
	View,
	ListView,
	StyleSheet,
	TouchableHighlight
} = React;

var StoryPage = require("./StoryPage");

var StoryCard = React.createClass({
	onClick: function() {
		this.props.navigator.push({
			title: this.props.story.headline,
			component: StoryPage,
			passProps: {
				story: this.props.story
			}
        });
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
