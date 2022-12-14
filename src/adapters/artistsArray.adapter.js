const artistsArrayAdapter = async (artistList) => {

    let artistObj = {}
    let artistArray = [] 
    
    artistList.forEach(element => {
        element.artist.forEach ( it => {
            artistObj = {
                id: it.id,
                albumCount: it.albumCount,
                name: it.name
            }

            artistArray.push( artistObj)
        })
    });

    return artistArray

}

export default artistsArrayAdapter