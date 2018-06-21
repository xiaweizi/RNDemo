import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };
        setInterval(() => {
            this.setState({
                showText: !this.state.showText
            })
        });
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>
                {display}
            </Text>
        );
    }
}

export default class BlinkTest extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
                <Blink text='gaga'/>
            </View>
        )
    }
}