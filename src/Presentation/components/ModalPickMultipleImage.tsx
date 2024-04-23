import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image} from 'react-native';
import { RoundedButton } from './RoundedButton';

interface Props {
    openGallery: (numberImage: number) => void,
    openCamera: (numberImage: number) => void, 
    numberImage: number, 
    modalUseState: boolean,
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalPickMultipleImage = ({openGallery, openCamera, setModalUseState, modalUseState, numberImage}: Props) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalUseState}
        onRequestClose={() => {
          setModalUseState(!modalUseState);
          headerShown:{true}
        }}>
          <View style={styles.close}>
          <TouchableOpacity onPress={() => setModalUseState(!modalUseState)}>
            <Image source={require('../../../assets/close_modal.png')} />
          </TouchableOpacity>
          </View>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Selecciona una opción</Text>
            
            <View style = {styles.buttonContainer}>
            <RoundedButton
                onPress={ () => {
                    openGallery(numberImage)
                    setModalUseState(false)
                }}
                text= 'Galería'
            />
            </View>

           <View style = {styles.buttonContainer}>
            <RoundedButton
                onPress={ () => {
                    openCamera(numberImage)
                    setModalUseState(false)
                }}
                text= 'Cámara'
            />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 250,
    height: 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 15
  },
  close:{
    position: 'absolute',
    marginTop: 260,
    marginLeft: 300,
    width:48,
    height:48,
    borderRadius: 48
  },
});

