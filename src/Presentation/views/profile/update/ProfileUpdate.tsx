import React, {useEffect, useState} from 'react'
import { View, Text, Image, ToastAndroid, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { RoundedButton } from '../../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../../components/CustomTextInput';
import styles from './Styles';
import { ModalPickImage } from '../../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { MyColors } from '../../../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'>{};

export const ProfileUpdateScreen = ({navigation, route}: Props) => {

  const {user} = route.params;
  const {name, lastname, image, phone, password, confirmPassword, loading, errorMessage, successMessage, onChange, onChangeInfoUpdate, update, pickImage, takePhoto} = useViewModel(user);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {

    if(errorMessage !== ''){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

  useEffect(() => {

    if(successMessage !== ''){
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage])


  return (
    <View style={styles.container}>
        <Image
        source = { require('../../../../../assets/fondo.jpg')}
        style = {styles.imageBackground}
        />

        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {
              image == ''
              ? 
              <Image
                source={{uri: user?.image}}
                style={styles.logoImage}
              />
            : <Image
                source={{uri: image}}
                style={styles.logoImage}
              />
            }
            
          </TouchableOpacity>
        
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
        </View>

    <View style={styles.form}>

      <ScrollView>
        <Text style={styles.formText}>ACTUALIZAR INFORMACIÓN</Text>

        <CustomTextInput
          placeholder='Nombres'
          keyBoardtype='default'
          image={require('../../../../../assets/user.png')}
          property='name'
          onChangeText={onChange}
          value={name}
        /> 

        <CustomTextInput
          placeholder='Apellidos'
          keyBoardtype='default'
          image={require('../../../../../assets/my_user.png')}
          property='lastname'
          onChangeText={onChange}
          value={lastname}
        />

        <CustomTextInput
          placeholder='Celular'
          keyBoardtype='default'
          image={require('../../../../../assets/phone.png')}
          property='phone'
          onChangeText={onChange}
          value={phone}
        /> 

        <CustomTextInput
          placeholder='Nueva contraseña'
          keyBoardtype='default'
          image={require('../../../../../assets/password.png')}
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        /> 
          
        <CustomTextInput
          placeholder='Confirmar contraseña'
          keyBoardtype='default'
          image={require('../../../../../assets/password.png')}
          property='confirmPassword'
          onChangeText={onChange}
          value={confirmPassword}
          secureTextEntry={true}
        /> 

        <View style={{marginTop: 30}}>
            <RoundedButton text='REGISTRAR' onPress={ () => {update();}}/>
        </View>
      </ScrollView>
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
            style = {styles.loading} 
            size="large" 
            color= {MyColors.primary} 
            />
          }

    </View>
    );
}

