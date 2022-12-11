import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSongs } from '../store/slices/songSlice'
import getAlbum from '../service/getAlbum.service'
import generateSongDataAdapter from '../adapters/songData.adapter'

const useAlbumData = () => {

    const [ error, setError ] = useState("")
    const dispatch = useDispatch()

    const generateAlbumData = (albumId) => {
        getAlbum(albumId)
          .then(resp => generateSongDataAdapter(resp.song))
            .then(data => dispatch(setSongs(data)))
          .catch(err => setError(err))
    }

    return {
        error,
        generateAlbumData
    }
}

export default useAlbumData