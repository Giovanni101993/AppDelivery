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
        bottom: '16%'
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '10%',
        alignItems: 'center',
    },
    logoImage:{
        width: 130,
        height: 130,
        borderRadius:100,
        borderColor: 'white',
        borderWidth: 2
    },
    logoText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 10
    },

    form: {
        width: '100%',
        height: '47%',
        backgroundColor: MyColors.background,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20
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