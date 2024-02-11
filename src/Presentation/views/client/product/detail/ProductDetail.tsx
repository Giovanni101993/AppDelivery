import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductDetailScreen'>{};

export const ClientProductDetailScreen = ({navigation, route}: Props) => {

    const {product} = route.params;
    const width = Dimensions.get('window').width; 
    const height = Dimensions.get('window').height; 
    const {shoppingBag, productImageList, quantity, price, addToBag, addItem, removeItem} = useViewModel(product);

  return (
    <View style={styles.container}>
        
    <GestureHandlerRootView>
            <Carousel
                loop={true}
                width={width}
                height={height}
                autoPlay={true}
                data={productImageList}
                //autoPlayInterval={5000}
                scrollAnimationDuration={5000}
                renderItem= {({item}) => <Image
                    source={{uri: item}}
                    style={styles.productImage}/>
                }
            />
        </GestureHandlerRootView>

        <View style={styles.productDetail}>
            <View style={styles.productInfo}>
                <Text style={styles.product}>{product.name}</Text>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Descripción</Text>
                <Text style={styles.contentProduct}>{product.description}</Text>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Precio</Text>
                <Text style={styles.contentProduct}>${product.price}</Text>
                <View style={styles.divider}></View>
                
                <Text style={styles.title}>Tu pedido</Text>
                <Text style={styles.contentProduct}>Cantidad: {quantity}</Text>
                <Text style={styles.contentProduct}>Valor total: {price}</Text>
                <View style={styles.divider}></View>
            </View>

            <View style={styles.productAction}>
                <TouchableOpacity 
                    style={styles.actionLess}
                    onPress={() => removeItem()}
                >
                    <Text style={styles.actionText}>-</Text>
                </TouchableOpacity>
                <View style={styles.quantity}>
                    <Text style={styles.actionText}>{quantity}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.actionAdd}
                    onPress={() => addItem()}
                >
                    <Text style={styles.actionText}>+</Text>
                </TouchableOpacity>

                <View style={styles.buttonAdd}>
                    <RoundedButton
                        text='AGREGAR AL CARRITO'
                        onPress={() => addToBag()}
                    />
                </View>
            </View>
        </View>
    
    <TouchableOpacity 
        style={styles.back}
        onPress={() => navigation.pop()}
    >
            <Image
                style={styles.backImage}
                source={require('../../../../../../assets/back.png')}
            />
        </TouchableOpacity>
    </View>
    
  )
    
  
}

