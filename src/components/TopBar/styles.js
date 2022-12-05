import { StyleSheet, Dimensions } from "react-native"
import theme from "../../theme/theme";


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    topbar_container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 7,
    },
    topbar_title: {
        color: theme.colors.secondary,
        fontWeight: "bold"
    }

});

export default styles