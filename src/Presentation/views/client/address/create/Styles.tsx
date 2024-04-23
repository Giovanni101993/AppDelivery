import { StyleSheet } from "react-native";

const ClientAddressCreateStyles = StyleSheet.create({

    container: {
        flex: 1
    },
    imageContainer: {
        paddingTop: 20,
        alignSelf: 'center',
    },
    image: {
        width: 220,
        height: 220,
    },
    form:{
        position: "absolute",
        backgroundColor: 'white',
        height: '50%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        marginTop: 30,
        bottom: 0
    },
    
});

export default ClientAddressCreateStyles;