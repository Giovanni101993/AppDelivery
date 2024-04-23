import React from "react";
import { Text, TouchableOpacity, View, Linking, Image } from "react-native";
import { RoundedButton } from "../../../../components/RoundedButton";
import styles from './Styles';

export const AdminPaymentListScreen = () => {

  const handlePress = () => {
    // Abre la URL en el navegador del dispositivo
    Linking.openURL('https://dashboard.stripe.com/test/payments');
  };

  return (
    <View style= {styles.container}>

        <View style={styles.imageContainer}>
          <Image 
            source={require('../../../../../../assets/domiiBig.png')}
            style={styles.imageLogo}
          />
        </View>

        <View>
          <Text style={styles.indication}>Mira el reporte de tus ventas realizadas pulsando el botón</Text>
        </View>

      <View style= {styles.buttonContainer}>
        <RoundedButton
          onPress={handlePress}
          text="VER REPORTE DE VENTAS"
          />
      </View>
    </View>
  );
};

export default AdminPaymentListScreen;
