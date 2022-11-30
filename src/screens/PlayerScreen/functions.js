import TrackPlayer, { State } from 'react-native-track-player';

// service
import { songData } from '../../service/getSongData.service'



export const setupPlayer = async (album) => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(album);
  } catch (error) {
    console.log(error);
  }
}


export const togglePlayBack = async (playBackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
  
    if (currentTrack != null) {
      if (playBackState == State.Paused) {
        return await TrackPlayer.play();
      } else {
        return await TrackPlayer.pause();
      }
    }
  };
  
