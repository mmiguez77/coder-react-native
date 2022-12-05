import axios from 'axios'

import env from "../../env"
import { albumMock } from '../mock/artistsDataMock'


const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}`
const testMode = env.TEST_MODE

/**
 * 
 * @param {number} albumId 
 * @returns devuelve array con info del album y las canciones para AlbumScreen
 */

const getAlbum = async (albumId) => {

    if (testMode === true) {
        const album = albumMock.find(it => it.albumId === albumId)
        return album.album
    } else {
        const url = `${env.BASE_URL}/getAlbum${middlePath}&id=${albumId}`
        try {
            const response = await axios.get(url)
            return response.data["subsonic-response"].album
        } catch (error) {
            console.log('Error getSongArtistInfo',error)
        }
    }

}


export default getAlbum