import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const ClientOrderDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode:'contain'
    },
    products:{
        width:'100%',
        height:'40%'
    },
    infoProducts:{
        width: '100%',
        height: '60%',
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
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
    delivery:{
        marginVertical: 12,
        fontSize:15,
        fontWeight: 'bold',
        color: MyColors.primary
    },
    totalInfo:{
        flexDirection: "row",
        marginTop: 2,
        alignItems: 'center',
        justifyContent: "space-between",
        top: 15
    },
    infoPrice:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    button:{
        width: '58%'
    },
    phone:{
        flexDirection: "row"
    },
    iconPhone:{
        width: 25,
        height: 25
    }
});

export default ClientOrderDetailStyles;