import { StyleSheet } from "react-native";

const AdminProductUpdateStyles = StyleSheet.create({

    container: {
        flex: 1
    },
    imageContainer: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    image: {
        width: 110,
        height: 150,
        resizeMode: 'contain'
    },
    form:{
        position: "absolute",
        backgroundColor: 'white',
        height: '75%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        marginTop: 30,
        bottom: 0
    },
    buttonContainer: {
        //position: "absolute",
        //bottom: 30,
        //left: 25,
        //right: 25
        marginTop: 50
    },
    
    textCategory:{
        paddingVertical: 15,
        alignSelf: "center",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    imageCategoryProduct:{
        width: 120,
        height: 120,
        alignSelf: "center",
        borderRadius: 100,
    }
});

export default AdminProductUpdateStyles;