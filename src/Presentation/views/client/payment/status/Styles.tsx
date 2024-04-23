import { StyleSheet } from "react-native";

const ClientPaymentStatusStyles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: 'white',
        alignItems: "center",
        paddingHorizontal: 30
    },
    image:{
        width: 100,
        height: 100,
        marginTop: '20%'
    },
    description:{
        fontSize:17,
        textAlign: "center",
        marginTop: 30,
        fontWeight: "bold"
    },
    info:{
        fontSize: 13,
        marginTop: 10,
        paddingHorizontal: 40,
        textAlign: "center"
    },
    button:{
        width:'100%',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    }
});

export default ClientPaymentStatusStyles;