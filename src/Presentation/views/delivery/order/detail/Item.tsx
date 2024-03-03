import React from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import { View, StyleSheet, Image, Text } from 'react-native'

interface Props {
    product: Product
}

export const OrderDetailItem = ({product}: Props) => {
  
    return(
        <View style={styles.container}>
            <Image
                source={{uri: product.image1}}
                style={styles.image}
            />

            <View style={styles.infoProduct}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.quantity}>Cantidad: {product.quantity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop:10,
        marginHorizontal:10,
        alignItems: 'center',
    },
    image:{
        height: 80,
        width: 80,
        borderRadius: 20
    },
    infoProduct:{
        marginLeft:10,
    },
    name:{
        fontSize:15,
        fontWeight: 'bold'
    },
    quantity:{
        fontSize: 13
    },
    
})
