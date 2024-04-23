import React, { useEffect } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { MyColors } from '../../../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { Category } from '../../../../../Domain/entities/Category';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { User } from '../../../../../Domain/entities/User';
import { RegisterDeliveryStackParamList } from '../../../../navigator/RegisterDeliveryNavigator';
import useViewModel from './ViewModel'


interface Props {
    user: User,
    
    navigation: StackNavigationProp<RegisterDeliveryStackParamList, "AdminDeliveryListScreen", undefined>
}
export const DeliveryStoreItem = ({user, navigation}: Props) => {
  

  return (
    <TouchableOpacity 

    onPress={() => {
      //navigation.navigate('AdminDeliveryListScreen', {idCategory: user.id!})
    }}
    >

        <View style = {styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{user.name} {user.lastname}</Text>
                <Text style={styles.title}>{user.name_store}</Text>
                <Text style={styles.description}>{user.phone}</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{uri: user.image}}
            />
            
        </View>
        <View style={styles.divider}></View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create ({

    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        //height: 80,
        paddingHorizontal: 25,
        marginTop: 15,
        alignItems: 'center',
        resizeMode: 'contain'
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 15
    },
    info: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 18
    },
    description: {
        color: 'gray',
        fontSize: 14,
        marginTop: 3,
    },
    actionContainer: {
        marginRight: 40,
        
    },
    actionImage: {
        width: 30,
        height: 30,
        marginVertical: 2
    },
    divider:{
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 25,
        flex: 1,
        marginVertical: 4
    }, 
    
});


/*const styles = StyleSheet.create({
    
    container:{
        alignSelf: 'center',
        paddingBottom: 20,
        flex: 1,
        borderRadius: 18
    },
    imageContainer:{
        flex: 1,
        borderRadius:18,
        //backgroundColor: 'white'
    },
    image: {
        flex: 1,
        //resizeMode: 'contain',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    titleContainer: {
        height: 55,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        elevation: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22
    }
})*/
