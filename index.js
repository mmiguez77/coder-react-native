import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import notifee, { EventType } from '@notifee/react-native'
import TrackPlayer from 'react-native-track-player'

notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
  
    if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
      await notifee.cancelNotification(notification.id);
    }
})

AppRegistry.registerComponent(appName, () => App)
TrackPlayer.registerPlaybackService(() => require('./service'))
