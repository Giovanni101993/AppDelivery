import { StyleSheet } from "react-native";

const ClientAddressMapStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
    map:{
        width:'100%',
        height:'100%'
    },
    location:{
        height: 40,
        width: 40,
        position: "absolute"
    },
    refPoint:{
        position: "absolute",
        backgroundColor: '#d4d4d4',
        width: '70%',
        paddingVertical: 4,
        top: 40,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    refPointText:{
        textAlign: 'center',
        fontSize: 16
    },
    buttonRefPoint:{
        position:'absolute',
        bottom: 30,
        width: '70%'
    }
});

export default ClientAddressMapStyles;