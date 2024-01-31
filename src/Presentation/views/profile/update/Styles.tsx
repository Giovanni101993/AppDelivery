import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const ProfileUpdateStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground : {
        width: '100%',
        height: '100%',
        opacity: 0.3,
        bottom: '38%'
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '2%',
        alignItems: 'center'
    },
    logoImage:{
        width: 90,
        height: 90
    },
    logoText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 10
    },

    form: {
        width: '100%',
        height: '68%',
        backgroundColor: MyColors.background,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 25
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
        marginTop: 25
    },
    formInputImage:{
        width: 30,
        height: 30,
        marginTop: 5,
    },
    formRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    formRegisterText:{
        fontStyle:'italic',
        color: MyColors.primary,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.primary,
        fontWeight: 'bold',
        marginLeft: 10
    },
    loading:{
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0
    }
});

export default ProfileUpdateStyles;