import { StyleSheet } from "react-native";

const AdminCategoryUpdateStyles = StyleSheet.create({

    container: {
        flex: 1
    },
    imageContainer: {
        paddingTop: 30
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    form:{
        position: "absolute",
        backgroundColor: 'white',
        height: '63%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        marginTop: 30,
        bottom: 0
    },
    buttonContainer: {
        position: "absolute",
        bottom: 30,
        left: 25,
        right: 25
    },
    box: {
        resizeMode: "contain"
    }
});

export default AdminCategoryUpdateStyles;