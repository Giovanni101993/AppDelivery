import React from 'react'
import { StyleSheet } from 'react-native'

export const ClientShoppingBagStyles = StyleSheet.create ({
  
    container: {
        flex: 1, 
        backgroundColor:'white'
    },
    totalPay:{
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    totalText:{
        fontWeight: 'bold',
        fontSize: 17
    },
    totalInfo:{
        alignItems: 'center'
    },
    buttonAdd:{
        width: '60%',
    },
});


export default ClientShoppingBagStyles;