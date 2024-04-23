import React, { useEffect } from "react";
import { KeyboardAvoidingView, Platform, View, Button, ScrollView, Pressable, Image } from "react-native";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import CreditCard from "react-native-credit-card-form-ui";
import { RoundedButton } from "../../../../components/RoundedButton";
import { MyColors } from "../../../../theme/AppTheme";
import DropDownPicker from "react-native-dropdown-picker";
import CustomTextInput from "../../../../components/CustomTextInput";
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../navigator/ClientStackNavigator";

interface Props extends StackScreenProps<ClientStackParamList, 'ClientPaymentFormScreen'>{};

export const ClientPaymentFormScreen = ({navigation, route}:Props) => {
  const {
    cardToken,
    createCardToken,
    onChange,
    open,
    value,
    items,
    setOpen,
    setValue,
    setItems,
    creditCardRef,
    identificationTypeList,
    identificationNumber,
    getIdentificationTypes,
    handleSubmit,
  } = useViewModel();

  useEffect(() => {
    getIdentificationTypes();
  }, []);

  useEffect(() => {
    if (cardToken !== undefined && cardToken !== null) {
      navigation.navigate('ClientPaymentInstallmentsScreen', {cardToken: cardToken})
    }
  }, [cardToken])
  

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <CreditCard
          ref={creditCardRef}
          background={MyColors.primary}
          textColor="black"
          labels={{
            holder: "Titular",
            cvv: "Código de seguridad",
            expiration: "Expiración",
          }}
          placeholders={{
            number: "0000 0000 0000 0000",
            cvv: "xxx",
            expiration: "MM/YYYY",
            holder: "NOMBRE DEL TITULAR",
          }}
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.dropdown}>
        <DropDownPicker
          placeholder="Tipo de identificación"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          />
     
        <CustomTextInput
          placeholder="Número de identificación"
          keyboardType="numeric"
          image={require("../../../../../../assets/identification.png")}
          property="identificationNumber"
          onChangeText={onChange}
          value={identificationNumber}
          />
      </View>

      <View style={styles.buttonContainer}>
      <Pressable onPress={() => handleSubmit()}>
          <Image
            style={styles.check}
            source={require('../../../../../../assets/checked.png')}
            
          />
        </Pressable>
      </View>
    </View>
  );
};
