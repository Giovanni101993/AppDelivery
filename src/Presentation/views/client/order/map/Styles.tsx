import { StyleSheet } from "react-native";

const ClientOrderMapStyles = StyleSheet.create({

    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
    map:{
        position: "absolute",
        top: 0,
        width:'100%',
        height:'66%'
    },
    buttonRefPoint:{
        marginTop: 25,
        width: '100%',
    },
    infoRoute:{
        position: "absolute",
        alignItems: "center",
        paddingTop: 15,
        backgroundColor: 'white',
        height:'34%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        bottom: 0
    },
    infoOrder:{
        flexDirection:'row',
        alignItems: 'center'
    },
    infoText:{
        flex:1,
        marginTop: 10,
    },
    iconOrder:{
        left: 10,
        height: 40,
        width: 40,
        top:10
    },
    infoTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoDescription:{
        fontSize: 14
    },
    divider:{
        backgroundColor: '#f2f2f2',
        height:1,
        width: '100%',
        marginVertical: 15
    },

    infoClient:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    imageClient:{
        width: 40,
        height: 40,
        borderRadius: 15,
        marginRight: 10
    },
    iconPhone:{
        width: 40,
        height: 40
    },
    nameClient:{
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold'
    },
    iconDelivery:{
        width: 35,
        height: 35
    },
    containerBack:{
        position: "absolute",
        top: 20,
        left: 10
    },
    backIcon:{
        width: 60,
        height: 60
    }
});

export default ClientOrderMapStyles;