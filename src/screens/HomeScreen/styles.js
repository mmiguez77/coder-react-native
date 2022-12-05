import { StyleSheet, Dimensions } from "react-native"
import theme from "../../theme/theme";

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    
    //top
    homescreen__render_flat_list_container: {
        marginTop: '3%',
        width: width / 2,
        alignItems: 'center'
    },

    // view
    homescreen__render_flat_list_view: {
        height: 170,
        width: '80%',
        backgroundColor: theme.colors.secondary,
        borderRadius: 10
    },

    //band name
    homescreen__render_flat_list_band_name: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
        marginTop: '7%',
        marginBottom: '2%'
    },
    homescreen__render_flat_list_band_gender: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: 'center',
        marginTop: '3%'
    },
    homescreen__render_flat_list_band_city: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: 'center'
    },
    //imagen
    homescreen__render_flat_list_image_view:{

    },

    homescreen__render_flat_list_image:{
        width: '45%',
        height: 70,
        alignSelf: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        borderColor: theme.colors.tertiary,
        borderWidth: 2
    },




});

export default styles