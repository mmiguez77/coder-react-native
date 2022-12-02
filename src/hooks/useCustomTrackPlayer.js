import { useState, useEffect } from 'react'
import TrackPlayer, {   
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  RepeatMode
} from 'react-native-track-player'


const useCustomTrackPlayer = () => {

  const playBackState = usePlaybackState()
  const progressBar = useProgress()
  const [ songTitle, setSongTitle ] = useState("")
  const [ songArtist, setSongArtist ] = useState("")
  const [ songDuration, setSongDuration ] = useState(0.00)
  const [ isAlbumEnd, setIsAlbumEnd ] = useState(false)


  const setupPlayer = async (album, song) => {

    try {
      await TrackPlayer.setupPlayer()

      setSongTitle(song.item.title)
      setSongArtist(song.item.artist)
      setSongDuration(song.item.duration)

      await TrackPlayer.add(album)
      await TrackPlayer.skip(song.index)
      await TrackPlayer.play()

    } catch (error) {
      console.log(error)
    }
  }

  const togglePlayBack = async (playBackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack != null) {
      if (playBackState == State.Paused) {
        return await TrackPlayer.play()
      } else {
        return await TrackPlayer.pause()
      }
    }
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.type == Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const { title, artist, duration } = track;
      setSongTitle(title)
      setSongArtist(artist)
      setSongDuration(duration)
    }
  })

  useTrackPlayerEvents([Event.PlaybackQueueEnded], async () => {
    TrackPlayer.stop();
  })

  const getNextTrack = async (albumLength) => {
    const currentTrackIndex = await TrackPlayer.getCurrentTrack()
    if(currentTrackIndex < albumLength){
      TrackPlayer.skipToNext()
    }
  }

  const getPrevTrack = async () => {
    const currentTrackIndex = await TrackPlayer.getCurrentTrack()
    if(currentTrackIndex != 0){
      TrackPlayer.skipToPrevious()
    }
  }

  const repeatCurrentTrack = async () => {
    await TrackPlayer.setRepeatMode(RepeatMode.Track)   
  }

  const offRepeatCurrentTrack = async () => {
    await TrackPlayer.setRepeatMode(RepeatMode.Off)   
  }
        
  return {
    playBackState,
    progressBar,
    songTitle,
    songArtist,
    songDuration,
    isAlbumEnd,
    setupPlayer,
    togglePlayBack,
    getNextTrack,
    getPrevTrack,
    repeatCurrentTrack,
    offRepeatCurrentTrack
  }
}

export default useCustomTrackPlayer


