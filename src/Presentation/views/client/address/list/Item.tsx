import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Address } from '../../../../../Domain/entities/Address'

interface Props{
    address: Address,
    checked: string,
    changeRadioValue: (address: Address) => void
}

export const AddressListItem = ({address, checked, changeRadioValue}: Props) => {
  return (
        
    <View style={styles.container}>

        <View style={styles.info}>
            <RadioButton
                value={address.id!}
                status={checked === address.id ? 'checked' : 'unchecked'}
                onPress={() => changeRadioValue(address)}
            />
            <View style={styles.infoUbicacion}>
                <Text style={styles.address}>{address.address}</Text>
                <Text style={styles.neighborhood}>{address.neighborhood}</Text>
            </View>
        </View>
        <View style={styles.divider}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginTop: 15
    },
    info:{
        flexDirection: 'row'
    },
    divider:{
        width: '100%',
        height: 1,
        backgroundColor: '#e8e8e8',
        marginTop: 10
    },
    address:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    neighborhood:{
        fontSize: 15
    },
    infoUbicacion:{
        marginLeft: 10
    },
    title:{
        alignItems: 'center',
        marginBottom: 30
    },
    textTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})
