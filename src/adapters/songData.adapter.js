
import songsMock from '../mock/songsMock'
import env from '../../env'

const middlePath = `?u=${env.U}&c=${env.C}&f=${env.F}&p=${env.P}`
const testMode = env.TEST_MODE

const generateSongDataAdapter = async (album) => {

    let songModel;

    if (testMode === true ) {
        const testingId = album.map(album => album.id)
        const testingArray = []
        songModel = songsMock.find(it => it.id === testingId[0])
        testingArray.push(songModel)
        
        return testingArray
        
    } else { 
        songModel = await album.map((song) => {
            return {
                id: song.id,
                url: `${env.BASE_URL}/stream${middlePath}&id=${song.id}`,
                title: song.title,
                artist: song.artist,
                duration: song.duration,
                album: song.album
            }    
        })

        return songModel            
    }
}

export default generateSongDataAdapter
