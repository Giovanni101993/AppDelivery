import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View, KeyboardType, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './Styles';
import { CustomTextInput } from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminCategoryUpdateScreen'>{};

export const AdminCategoryUpdateScreen = ({navigation, route}: Props) => {

  const {category} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const {name, description, responseMessage, loading, image, onChange, takePhoto, pickImage, updateCategory} = useViewModel(category);
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
                text = 'MODIFICAR CATEGORÍA'
                onPress={() => {updateCategory()}}
            />
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
