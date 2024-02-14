import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground : {
        width: '100%',
        height: '100%',
        opacity: 0.3,
        bottom: '15%'
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoImage:{
        width: 100,
        height: 100
    },
    logoText:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    form: {
        width: '100%',
        height: '45%',
        backgroundColor: MyColors.background,
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
        marginTop: 30
    },
    formRegisterText:{
        fontStyle:'italic',
        color: MyColors.primary,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.primary,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default HomeStyles;