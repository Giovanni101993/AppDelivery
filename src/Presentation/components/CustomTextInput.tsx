import React from 'react';
import { View, TextInput, Image, StyleSheet, KeyboardType } from 'react-native';

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    editable?: boolean,
    autoCapitalizeKeyboard?: boolean,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    editable = true,
    onChangeText,
    autoCapitalizeKeyboard
}: Props) => {

    return (
        <View style={styles.formInput}>
            <Image
                source={image}
                style={styles.formInputImage}
            />
            <TextInput
                style={styles.formTextInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalizeKeyboard ? 'none' : 'sentences'}
                value={value}
                onChangeText={text => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}
                editable={editable}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formInputImage: {
        width: 30,
        height: 30,
        marginTop: 5,
    },
});

export default CustomTextInput;
