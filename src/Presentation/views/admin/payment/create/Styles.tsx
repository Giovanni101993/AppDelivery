import { StyleSheet } from "react-native";

const AdminCategoryCreateStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        //paddingTop: 40,
        alignItems: "center"
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain'
    },
    imageQR: {
        bottom: '10%',
        width: '100%',
        height: '100%',
        //resizeMode: 'contain'
    },
    form:{
        position: "absolute",
        backgroundColor: 'white',
        height: '40%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        paddingTop: 5,
        bottom: 0
    },
    instruction:{
        top: 15,
        alignItems: "center",
    },
    instructionText:{
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default AdminCategoryCreateStyles;