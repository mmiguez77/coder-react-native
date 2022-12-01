import { useState, useEffect } from 'react'
import TrackPlayer, {   
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player'


const useCustomTrackPlayer = () => {

  const playBackState = usePlaybackState()
  const progressBar = useProgress()

  const [ songIndex, setsongIndex ] = useState(0)
  const [ songTitle, setSongTitle ] = useState("")
  const [ songArtist, setSongArtist ] = useState("")
  const [ songDuration, setSongDuration ] = useState(0.00)
  const [ isAlbumEnd, setIsAlbumEnd ] = useState(false)


  const setupPlayer = async (album, song) => {
    try {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(album)
      await TrackPlayer.skip(song.index)
      
      const track = await TrackPlayer.getTrack(song.index)
      
      const { title, artist, duration } = track;
      setSongTitle(title)
      setSongArtist(artist)
      setSongDuration(duration)
      
      await TrackPlayer.play()
    } catch (error) {
      console.log(error)
    }
  }
  
  const getSongIndex = async (album, songId) => {
    if (songId == undefined || songId == null ) { 
      return 0
    } else {
      return await album.findIndex((it) => it.id === songId)
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

  });

  useTrackPlayerEvents([Event.PlaybackQueueEnded], async (event) => {
    TrackPlayer.stop();
    setIsAlbumEnd(true)
  })

        
  return {
    playBackState,
    progressBar,
    songIndex,
    songTitle,
    songArtist,
    songDuration,
    isAlbumEnd,
    setupPlayer,
    togglePlayBack
  }
}

export default useCustomTrackPlayer


