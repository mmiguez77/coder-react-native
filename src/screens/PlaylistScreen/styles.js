import { StyleSheet, Dimensions } from "react-native"

import theme from "../../theme/theme"

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    
    /**** PLAYLIST_SCREEN ****/

    // top
    playlistscreen__container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        
    },
    playlistscreen__topbar_container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 7
    },
    playlistscreen__topbar_title: {
        color: theme.colors.secondary,
        fontWeight: "bold"
    },
    playlistscreen__topbar_icons: {
        color: theme.colors.secondary,
    },

    // divider
    playlistscreen__latestsong_divider: {
        width: "80%",
        alignSelf: "center",
        
    },

    // latest_song
    playlistscreen__latestsong_container: {
        flex: 5,
        backgroundColor: theme.colors.primary,
        alignItems: "center"
    },
    playlistscreen__latestsong_avatar_container: {
        flexDirection: "row",
        justifyContent: "space-around"
    },  

    // latest_song img

    // latest_song songlist


    // artist in playlist
    playlistscreen__artists_container: {
        flex: 2,
        paddingTop: 2,
        paddingBottom: 10
    },
    playlistscreen__artists_toptext_container: {
        flexDirection:"row", 
        justifyContent: "space-between",
        marginHorizontal: "10%"
    },
    playlistscreen__artists_toptext: {
        color: theme.colors.secondary,
        marginTop: 15,
    },
    playlistscreen__artists_image_container: {
        flex: 1,
        marginTop: 25,
        alignItems: "center",
    },
    playlistscreen__artists_image_pressable: {
        flex: 1,
        zIndex: 100,
        alignItems: "center"
    },
    playlistscreen__artists_image_rounded: {
        height: 55,
        width: 55,
        borderRadius: 50
    },
    playlistscreen__artists_image_text_container: {
        marginHorizontal: 20,
        top: 22,
        backgroundColor: theme.colors.secondary,
        width: 75,
        height: 65,
        zIndex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: "flex-end",
    },
    playlistscreen__artists_image_text: {
        color: theme.colors.primary,
        textAlign: "center",
        marginBottom: 5,
        zIndex: 1,
    },


});

export default styles