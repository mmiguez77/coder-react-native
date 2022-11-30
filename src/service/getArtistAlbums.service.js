import env from "../../env"
import axios from 'axios'

const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}`


const getArtistAlbums = async (artistId) => {

    const url = `${env.BASE_URL}/getArtist${middlePath}&id=${artistId}`

    try {
        const response = await axios.get(url)
        return response.data["subsonic-response"].artist
    } catch (error) {
        console.log('Error getSongArtistInfo',error)
    }
}



export default getArtistAlbums