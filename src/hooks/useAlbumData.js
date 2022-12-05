import { useState, useEffect } from 'react'

import getAlbum from '../service/getAlbum.service'
import generateSongDataAdapter from '../adapters/songData.adapter'



const useAlbumData = () => {

    const [ album, setAlbum] = useState([])
    const [ error, setError ] = useState("")

    const changeState = (albumId) => {
        getAlbum(albumId)
          .then(resp => generateSongDataAdapter(resp.song))
            .then(data => setAlbum(data))
          .catch(err => setError(err))

    }


    return {

        album,
        changeState

    }

}

export default useAlbumData