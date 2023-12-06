import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Clock extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {

    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <View>
        <Text>Horloge</Text>
        <Text>Il est {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    );
  }
}

export default Clock;