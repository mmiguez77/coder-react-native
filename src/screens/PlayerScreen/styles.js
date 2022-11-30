import { StyleSheet, Dimensions } from "react-native"

import theme from "../../theme/theme"

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    
    /**** PLAYER_SCREEN ****/

    // top
    playerscreen__container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    playerscreen__topbar_container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 7
    },
    playerscreen__topbar_title: {
        color: theme.colors.secondary,
        fontWeight: "bold"
    },
    playerscreen__topbar_icons: {
        color: theme.colors.secondary,
    },

    // imagen
    playerscreen__image_container: {
        flex: 2.5,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: width,
    },
    playerscreen__image_rounded: {
        height: 275,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
    },

    // titulo / artista
    playerscreen__artist_container: {
        backgroundColor: theme.colors.primary,
        alignItems: 'center'
    },
    playerscreen__artist_title_text: {
        color: theme.colors.secondary,
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    playerscreen__artist_artist_text: {
        color: theme.colors.secondary,
        fontSize: 14
    },


    // botones player
    playerscreen__controls_container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    // barra
    playerscreen__bar_container: {
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    playerscreen__bar_container_text: {
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30
    },
    playerscreen__bar_time_text: {
        color: theme.colors.secondary,
    },

    // tapbar
    playerscreen__tapbar_container: {
        flex: 0.5,
        backgroundColor: theme.colors.primary,
        borderTopWidth: 2,
        borderColor: theme.colors.tertiary,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default styles