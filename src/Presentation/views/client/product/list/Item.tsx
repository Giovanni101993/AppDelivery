import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';
import { Product } from '../../../../../Domain/entities/Product';
import { Category } from '../../../../../Domain/entities/Category';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props{
    product: Product;
    navigation: StackNavigationProp<ClientStackParamList, 'ClientProductListScreen', undefined>
}

export const ClientProductItem = ({product, navigation}: Props) => {

  return (
    <TouchableOpacity
        onPress={() => navigation.navigate('ClientProductDetailScreen', {product: product})}
    >
        <View style = {styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text>${product.price}</Text>
            </View>

            <Image
                style = {styles.image}
                source = {{uri: product.image1}}
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
