import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import {Rol} from '../../../Domain/entities/Rol';
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props {
    rol: Rol,
    height: number,
    width: number,
    navigation: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}

export const RolesItem = ({rol, height, width, navigation}: Props) => {
  return (
    <TouchableOpacity 

    onPress={() => {
        if (rol.name == 'ADMIN'){
            navigation.replace('AdminTabsNavigator');
        }
        else if (rol.name == 'TIENDA'){
            navigation.replace('ShopTabsNavigator');
        }
        else if(rol.name == 'CLIENTE'){
            navigation.replace('RegisterScreen');
        }
        else if(rol.name == 'REPARTIDOR'){
            navigation.replace('DeliveryTabsNavigator');
        }
    }}

    style={{...styles.container, height: height, width: width}}>

        <View style= {styles.imageContainer}>
            <Image
                style={styles.image}
                source={{uri: rol.image}}
            />
            <View style= {styles.titleContainer}>
                <Text style = {styles.title}>{rol.name}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    
    container:{
        alignSelf: 'center',
        paddingBottom: 20,
        flex: 1,
        borderRadius: 18
    },
    imageContainer:{
        flex: 1,
        borderRadius:18,
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    titleContainer: {
        height: 50,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18
    },
    title: {
        fontWeight: 'bold'
    }
})
