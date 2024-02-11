import { StyleSheet } from "react-native";

const ClientProductDetailStyles = StyleSheet.create({
    container: {
        top: 32,
        flex: 1,
        backgroundColor: 'white'
    },
    productImage: {
        width: '100%',
        height: '46%'
    },
    productDetail:{
        position:"absolute",
        width: '100%',
        height: '58%',
        backgroundColor:'white',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    productInfo:{
        padding: 24
    },
    product:{
        fontSize: 20,
        fontWeight: "bold"
    },
    title:{
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 16
    },
    contentProduct:{
        fontSize: 14
    },
    divider:{
        height: 1,
        backgroundColor: '#DEDADA',
        marginTop: 7
    },
    productAction:{
        flexDirection: "row",
        paddingHorizontal: 20,
        height: 66,
        backgroundColor: '#f2f2f2',
    },
    actionLess:{
        backgroundColor:'#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 12,
        alignSelf: "center",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    actionAdd:{
        backgroundColor:'#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 12,
        alignSelf: "center",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    actionText:{
        color: 'white',
        fontSize: 15
    },
    quantity:{
        backgroundColor:'#5D5C5C',
        paddingVertical: 5,
        width: 32,
        alignSelf: "center",
        alignItems: "center",
    },
    buttonAdd:{
        flex: 1,
        marginLeft: 16,
        paddingHorizontal:2,
        justifyContent:'center',
        alignItems: "center"
    },
    back:{
        position: "absolute",
        top: 20,
        left: 15
    },
    backImage:{
        height: 60,
        width: 60
    }
});

export default ClientProductDetailStyles;