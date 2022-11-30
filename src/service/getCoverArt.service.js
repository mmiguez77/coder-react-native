import env from "../../env"
import axios from 'axios'

const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}`


const getCoverArt = async () => {

    const url = `${env.BASE_URL}/getArtists${middlePath}`

    try {
        const response = await axios.get(url)
        return response.data["subsonic-response"].artists.index
    } catch (error) {
        console.log('Error getSongArtistInfo',error)
    }
}

//

export default getCoverArt