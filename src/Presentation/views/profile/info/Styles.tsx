import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";


const ProfileInfoStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%',
    },
    logoImage:{
        alignSelf: 'center',
        top:3,
        width: 170,
        height: 170,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3
    },
    logoText:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    imageBackground : {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '14%'
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
    formImage:{
        width: 40,
        height: 40
    },
    formTextDescription:{
        fontSize: 12,
        color: "gray"
    },
    formInfo:{
        flexDirection: "row",
        alignItems: "center"
    },
    formContent:{
        marginLeft: 15
    },
    logout:{
        position: "absolute",
        alignSelf: 'center',
        top: 40,
        right: 15
    },
    imageLogout:{
        width: 50,
        height: 50
    },
    changeRol:{
        position: "absolute",
        alignSelf: 'center',
        top: 110,
        right: 15
    },
    imageChange:{
        width: 50,
        height: 50
    }
})

export default ProfileInfoStyles;