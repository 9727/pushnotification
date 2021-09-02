import React, {Component} from 'react';
import PushNotification, {Importance} from 'react-native-push-notification';
import index from './index';

export default class NotifService extends Component {
  constructor(props) {
    super(props);
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: 'arsh97', // (required)
        channelName: `arsh`, // (required)
        channelDescription: 'A default channel', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH,
        priority: 'high', // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created =>
        console.log(`createChannel 'default-channel-id' returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  popInitialNotification() {
    PushNotification.popInitialNotification(notification =>
      console.log('InitialNotication:', notification),
    );
  }
}
