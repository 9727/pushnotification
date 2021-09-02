import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NotifService from './NotifService';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.notif = new NotifService();
  }
  componentDidMount() {
    this.notif.createDefaultChannels();
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
