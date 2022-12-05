import axios from 'axios'
import env from "../../env"

import { getArtist } from "../mock/artistsDataMock"
const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}`
const testMode = env.TEST_MODE

/**
 * Devuelve array con todos los artistas para HomeScreen
 * @returns getArtists
 */

const getArtists = async () => {


    if (testMode === true) {

        return getArtist

    } else {

        const url = `${env.BASE_URL}/getArtists${middlePath}`

        try {
            const response = await axios.get(url)
            return response.data["subsonic-response"].artists.index
        } catch (error) {
            console.log('Error getSongArtistInfo',error)
        }

    }
}



export default getArtists