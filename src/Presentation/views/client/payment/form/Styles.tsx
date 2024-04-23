import { StyleSheet } from "react-native";

const ClientPaymentFormStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
    },
    form:{
        //flex: 1,
        marginTop: 30
    },
    buttonContainer:{
        width: '100%',
        padding: 20,
    },
    dropdown:{
        marginTop: 30,
        marginHorizontal: 20,
        flex: 1
    },
    check: {
        width: 80,
        height: 80,
        alignSelf: 'flex-end',
    }
});

export default ClientPaymentFormStyles;