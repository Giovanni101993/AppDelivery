import React from 'react';
import { Product } from '../../../../Domain/entities/Product';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props{
    product: Product,
    addItem: (product: Product) => void,
    substractItem: (product: Product) => void,
    deleteItem: (product: Product) => void,
}

export const ShoppingBagItem = ({product, addItem, substractItem, deleteItem}: Props) => {
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{uri: product.image1}}
            />
        </View>

        <View style={styles.productInfo}>
            <View style={{flexDirection: 'row'}}>
                <Text style= {styles.title}>{product.name}</Text>
                <Text style= {styles.price}>${product.quantity! * product.price}</Text>
            </View>

        <View style={styles.productAction}>
            <View style = {styles.actions}>
                <TouchableOpacity 
                    style={styles.actionLess}
                    onPress={() => substractItem(product)}
                >
                    <Text style={styles.actionText}>-</Text>
                </TouchableOpacity>

                    <View style={styles.quantity}>
                        <Text style={styles.actionText}>{product.quantity}</Text>
                    </View>

                <TouchableOpacity 
                    style={styles.actionAdd}
                    onPress={() => addItem(product)}
                >
                    <Text style={styles.actionText}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => deleteItem(product)}
            >
                <Image
                    style={styles.deleteItem}
                    source={require('../../../../../assets/trash.png')}
                />
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 70,
        flexDirection: 'row',
        resizeMode: 'contain',
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: 'center'
    },
    imageContainer:{

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    productInfo:{
        flex: 1
    },
    title:{
        fontSize: 14,
        marginLeft: 15,
        fontWeight: 'bold',
        flex: 1
    },
    price:{
        marginRight: 30,
        fontWeight: 'bold'
    },

    productAction:{
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 5,
        marginRight: 40,
        alignItems: 'center'
    },
    actionLess:{
        backgroundColor:'#B4B1B1',
        paddingVertical: 5,
        paddingHorizontal: 12,
        alignSelf: "center",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    actionAdd:{
        backgroundColor:'#B4B1B1',
        paddingVertical: 5,
        paddingHorizontal: 12,
        alignSelf: "center",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    actionText:{
        color: 'black',
        fontSize: 15
    },
    quantity:{
        backgroundColor:'white',
        paddingVertical: 5,
        width: 32,
        alignSelf: "center",
        alignItems: "center",
    },
    actions:{
        flexDirection: 'row',
        flex: 1
    },
    deleteItem:{
        width: 35,
        height: 35
    },

});
