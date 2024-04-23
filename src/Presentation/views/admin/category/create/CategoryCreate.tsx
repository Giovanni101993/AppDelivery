import React, { useState, useEffect, useContext } from 'react'
import { Image, Text, TouchableOpacity, View, KeyboardType, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './Styles';
import { CustomTextInput } from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { UserContext } from '../../../../context/UserContext';

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminCategoryCreateScreen'>{};

export const AdminCategoryCreateScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {name, description, responseMessage, loading, image, onChange, takePhoto, pickImage, createCategory} = useViewModel();
  useEffect(() => {
    if(responseMessage !== ''){
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])
  
  return (
    <View style = {styles.container}>
        <TouchableOpacity 
            style = {styles.imageContainer}
            onPress={() => setModalVisible(true)}
        >
            {
              image == ''
              ? 
              <Image
                style = {styles.image}
                source = {require('../../../../../../assets/image_new.png')}
              />
            : <Image
                source={{uri: image}}
                style={styles.image}
              />
            }
        </TouchableOpacity>

        <View style = {styles.form}>
            <CustomTextInput
                placeholder='Nombre de la categoria'
                image = {require('../../../../../../assets/categories.png')}
                keyBoardtype='default'
                property='name'
                value = {name}
                onChangeText={onChange}
            />

            <CustomTextInput
                placeholder='Descripción'
                image = {require('../../../../../../assets/description.png')}
                keyBoardtype='default'
                property='description'
                value = {description}
                
                onChangeText={onChange}
            />
        </View>
        <View style = {styles.buttonContainer}>
            <RoundedButton
                text = 'CREAR CATEGORÍA'
                onPress={() => {createCategory()}}
            /><Text></Text>
        </View>

        <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />
          {
            loading &&
            <ActivityIndicator 
            style = {MyStyles.loading} 
            size="large" 
            color= {MyColors.primary} 
            />
          }

    </View>
  )
}
