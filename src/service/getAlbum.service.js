import env from "../../env"
import axios from 'axios'

const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}`


const getAlbum = async (albumId) => {

    const url = `${env.BASE_URL}/getAlbum${middlePath}&id=${albumId}`
    try {
        const response = await axios.get(url)
        return response.data["subsonic-response"].album
    } catch (error) {
        console.log('Error getSongArtistInfo',error)
    }
}


export default getAlbum