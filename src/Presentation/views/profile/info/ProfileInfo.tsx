import React, { useEffect } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Pressable } from 'react-native'
import useViewModel from './ViewModel';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';
import { Rol } from '../../../../Domain/entities/Rol';


interface Props extends StackScreenProps<RootStackParamList>{};

export const ProfileInfoScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {user, removeUserSession} = useViewModel();

  useEffect(() => {
    if (!user || !user.id) {
      navigation.replace('HomeScreen');
    }
  }, [user]);


return(
 <View style={styles.container}>
      <Image
        source = {require ('../../../../../assets/fondo.jpg')}
        style = {styles.imageBackground}  
      />

      <Pressable
        style = {styles.logout}
        onPress={() => {removeUserSession();}}>
        <Image
          source = {require ('../../../../../assets/exit.png')}
          style = {styles.imageLogout}  
        />
      </Pressable>

      {user && user.roles && user.roles.length > 1 && (
  <Pressable
    style={styles.changeRol}
    onPress={() => navigation.replace('RolesScreen')}>
    <Image
      source={require('../../../../../assets/change.png')}
      style={styles.imageChange}  
    />
  </Pressable>
      )}

    <View style = {styles.logoContainer}>
      {
        user?.image !== ''
          &&
          <Image
           source = {{uri: user?.image}}
            style = {styles.logoImage}
          />
      }
    </View>

    <View style={styles.form}>
      <View style={styles.formInfo}>
        <Image
          source={require('../../../../../assets/user.png')}
          style={styles.formImage}
        />
        <View style= {styles.formContent}>
          <Text>{user?.name} {user?.lastname}</Text>
          <Text style={styles.formTextDescription}>Nombre del usuario</Text>
        </View>
      </View>

      <View style={{...styles.formInfo, marginTop: 25}}>
        <Image
          source={require('../../../../../assets/email.png')}
          style={styles.formImage}
        />
        <View style= {styles.formContent}>
          <Text>{user?.email}</Text>
          <Text style={styles.formTextDescription}>Correo electrónico</Text>
        </View>
      </View>
      
      <View style={{...styles.formInfo, marginTop: 25, marginBottom: 45}}>
        <Image
          source={require('../../../../../assets/phone.png')}
          style={styles.formImage}
        />
        <View style= {styles.formContent}>
          <Text>{user?.phone}</Text>
          <Text style={styles.formTextDescription}>Número de celular</Text>
        </View>
      </View>

      <RoundedButton
        onPress={() => {
          navigation.navigate('ProfileUpdateScreen', {user: user!})
        }}
        text='ACTUALIZAR INFORMACIÓN'
      />
    
  </View>

    
    
    
    
  </View>
  )
}


{/*<Button
      onPress={ ()=> {
        removeSession();
        navigation.navigate('HomeScreen');
      }}
      title='Cerrar Sesión'
      />
    {<Text style= {styles.logoText}>enviosYa</Text>}
    
    */}