import React from 'react'
import env from "../../env"
import axios from 'axios'

const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}&id=track-`

export const songData = [{
    id: 1,
    url: `${env.BASE_URL}/stream${middlePath}${7043}`,
    title: 'Ice Age',
    artist: 'deadmau5',
     // Load artwork from the file system:
    artwork: require('../assets/img/img1.jpg'),
    duration: 411
}]

const getSongData = async (id) => {

    const url = `${env.BASE_URL}/getSong${middlePath}${id}`

    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log('Error getSongArtistInfo',error)
    }
}




export default getSongData