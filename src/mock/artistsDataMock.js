export const getArtist = [
    {
        artist: [
            {            
                id: 1,
                name: "AC/DC" 
            }   
        ],
        name: 'A'
    },
    {
        artist: [
            {            
                id: 2,
                name: "Audioslave"   
            }   
        ],
        name: 'A'
    },
    {
        artist: [
            {            
                id: 3,
                name: "Foo Fighters"  
            }   
        ],
        name: 'F'
    }
    
]

export const getAlbums = [
    {
        artistId: 1,
        album: 
            [
                {       
                    id: 1,
                    albumId: 1,
                    name: "Iron Main 2",
                    artist: "AC/DC",
                }
            ]
    },
    {
        artistId: 2,
        album: 
            [
                {
                    id: 2,
                    albumId: 2,
                    artist: "Audioslave",
                    name: "Audioslave"    
                }
            ]

    },
    {
        artistId: 3,
        album: 
            [
                {
                    id: 3,
                    albumId: 3,
                    artist: "Foo Fighters",
                    name: "Wasting Light"   
                }
            ]
      
    } 
]

export const albumMock = [
    {
        albumId: 1,
        album: {
            albumId: 1,
            song: 
                [
                    {
                        id: 1,
                        title: "Shoot To Thrill"
                    }
                ]
        }        
    },
    {
        albumId: 2,
        album: {
            albumId: 2,
            song: 
                [
                    {
                        id: 2,
                        title: "Cochise"
                    }
                ]
        }
        
    },
    {
        albumId: 3,
        album: {
            albumId: 3,
            song: 
                [
                    {
                        id: 3,
                        title: "Wasting Light"
                    }
                ]
        }
        
    }
]