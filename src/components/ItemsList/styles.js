import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    
    /**** ITEMSLIST ****/
    itemlist__container: {
        flex: 1
    },
    itemlist__view_container: {
        height: 40,
        backgroundColor: "#462CB2"
    },
    itemlist__title: {
        margin: "auto",
        textAlign: "center",
        lineHeight: 40,
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },  
    itemlist__input_container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 30,
        backgroundColor: "#C7A1F7", 
        width: "100%"
    },
    itemlist__input_style: {
        backgroundColor: "white",
        width: 250,
        borderRadius: 5,
        paddingLeft: 10
    },
    itemlist__input_button: {
        borderRadius: 15,
        backgroundColor: "#630ED0",
        height: 30,
        lineHeight: 30,
        textAlign: "center",
        width: 70,
        color: "white",
    }
});

export default styles