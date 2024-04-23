import { StyleSheet } from "react-native";

const ClientPaymentInstallmentsStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    dropDownContainer:{
        paddingHorizontal: 20,
        marginTop: 30,
        flex: 1
    },
    numberInstallments:{
        marginHorizontal: 20,
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 20
    },
    buttonContainer:{
        width:'100%',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    loading:{
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0
    },
})

export default ClientPaymentInstallmentsStyles;