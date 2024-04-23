import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { MyColors } from '../../../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { Category } from '../../../../../Domain/entities/Category';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props {
    category: Category,
    height: number,
    width: number,
    navigation: StackNavigationProp<ClientStackParamList, "ClientCategoryListScreen", undefined>
}

export const ClientCategoryItem = ({category, height, width, navigation}: Props) => {
  return (
    <TouchableOpacity 

    onPress={() => {
       navigation.navigate('ClientProductListScreen', {idCategory: category.id!})
    }}
    style={{...styles.container, height: height, width: width}}>

        <View style= {styles.imageContainer}>
            <Image
                style={styles.image}
                source={{uri: category.image}}
            />
            <View style= {styles.titleContainer}>
                <Text style = {styles.title}>{category.name}</Text>
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
})
