import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoImage:{
        width: 260,
        height: 260
    },
    logoText:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    form: {
        width: '100%',
        height: '47%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    formTextInput:{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formInput:{
        flexDirection: 'row',
        marginTop: 30
    },
    formInputImage:{
        width: 30,
        height: 30,
        marginTop: 5,
    },
    formRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    formRegisterText:{
        fontStyle:'italic',
        //color: MyColors.primary,
        borderBottomWidth: 1,
        //borderBottomColor: MyColors.primary,
        fontWeight: 'bold',
        marginLeft: 10
    },
    forgottPassword:{
        marginTop: 10,
        textAlign: "center",
        fontStyle:'italic',
        
        fontWeight: 'bold',
    }
});

export default HomeStyles;