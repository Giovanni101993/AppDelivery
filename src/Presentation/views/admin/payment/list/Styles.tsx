import { StyleSheet } from "react-native";

const AdminPaymentListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
    },
    
    buttonContainer:{
        width: '100%',
        padding: 20,
        alignSelf: 'flex-end'
    },
    imageContainer:{
        marginTop: 80,
        alignItems: "center"
    },
    imageLogo: {
        width: 280,
        height: 280,
    },
    indication:{
        marginTop: 30,
        textAlign:"center",
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default AdminPaymentListStyles;