import env from "../../env"
import axios from 'axios'

const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}&id=track-`



const getSongData = async (songId) => {

    const url = `${env.BASE_URL}/getSong${middlePath}${songId}`

    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log('Error getSongArtistInfo',error)
    }
}



export const songData = [{
    id: 1,
    url: `${env.BASE_URL}/stream${middlePath}${7034}`,
    title: 'Ice Age',
    artist: 'deadmau5',
    duration: 411
}]

export default getSongData