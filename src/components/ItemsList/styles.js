import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#344955",
        alignItems: "center",
        paddingTop: 100,
    },
    inputcontainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor: "pink" 
    },
    inputStyle: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 250,
    },
    button: {
        backgroundColor: "#F9AA33",
        height: 35,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
});

export default styles