import axios from 'axios'

import env from "../../env"
import { getAlbums } from '../mock/artistsDataMock'

const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}`
const testMode = env.TEST_MODE


/**
 * 
 * @returns array con todos los albums del artista para ArtistScreen
 */

const getArtistAlbums = async (artistId) => {

    
    if (testMode === true) {
        
        const artist = getAlbums.find(it => it.artistId === artistId)
        return artist

    } else {

        const url = `${env.BASE_URL}/getArtist${middlePath}&id=${artistId}`

        try {
            const response = await axios.get(url)
            return response.data["subsonic-response"].artist
        } catch (error) {
            console.log('Error getSongArtistInfo',error)
        }
    }
}



export default getArtistAlbums