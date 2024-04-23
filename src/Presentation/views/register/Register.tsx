import {
  View,
  Text,
  Image,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RoundedButton } from "../../../Presentation/components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";
import { ModalPickImage } from "../../components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigator/MainStackNavigator";
import { MyColors } from "../../theme/AppTheme";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";

interface Props
  extends StackScreenProps<RootStackParamList, "RegisterScreen"> {}

export const RegisterScreen = ({ navigation, route }: Props) => {
  const {
    /*departamento,
    setDepartamento,
    ciudad,
    setCiudad,
    departamentosItems,
    ciudadesItems,
    openDepartamento,
    setOpenDepartamento,
    openCiudad,
    setOpenCiudad,*/
    open,
    setOpen,
    items,
    setItems,
    value,
    setValue,
    name,
    name_store,
    business_type,
    address,
    lastname,
    email,
    image,
    phone,
    password,
    departamento,
    ciudad,
    confirmPassword,
    loading,
    errorMessage,
    user,
    onChange,
    register,
    registerStore,
    pickImage,
    takePhoto,
  } = useViewModel();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.name_store !== null && user.name_store !== undefined) {
        navigation.replace("ShopTabsNavigator");
      } else {
        navigation.replace("ClientTabsNavigator");
      }
    }
  }, [user]);

  return (
    
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image == "" ? (
            <Image
              source={require("../../../../assets/user_image.png")}
              style={styles.logoImage}
            />
          ) : (
            <Image source={{ uri: image }} style={styles.logoImage} />
          )}
        </TouchableOpacity>

        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.dropDownContainer}>
          <Image
            style={styles.imageRol}
            source={require("../../../../assets/rol.png")}
          />
          <DropDownPicker
            style={{ width: "82%" }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{ width: "82%", zIndex: 10000 }}
            placeholder="Seleccione un rol de usuario"
          />
        </View>

        {/*<View style={styles.dropDownContainer}>
          <Image
            style={styles.imageLocation}
            source={require("../../../../assets/colombia.png")}
          />
          
          <DropDownPicker
            items={departamentosItems}
            value={departamento}
            containerStyle={{ height: 40, width: "82%", marginTop: 30 }}
            open={openDepartamento}
            setOpen={setOpenDepartamento}
            setValue={setDepartamento}            
            placeholder="Selecciona un departamento"
            zIndex={9000}
          />
        </View>

        {departamento && (
          <View style={styles.dropDownContainer}>
            <Image
              style={styles.imageLocation}
              source={require("../../../../assets/colombia1.png")}
            />
            <DropDownPicker
              items={ciudadesItems}
              value={ciudad}
              containerStyle={{ height: 40, width: "82%", marginTop: 30 }}
              open={openCiudad}
              setOpen={setOpenCiudad}
              setValue={setCiudad}
              placeholder="Selecciona una ciudad"
            />
          </View>
        )}
      */}
      <ScrollView>
          <View>
            {value === "TIENDA" && (
              <>
                <CustomTextInput
                  placeholder="Nombre de su negocio"
                  keyboardType="default"
                  image={require("../../../../assets/tienda.png")}
                  property="name_store"
                  onChangeText={onChange}
                  value={name_store}
                />

                <CustomTextInput
                  placeholder="Tipo de negocio"
                  keyboardType="default"
                  image={require("../../../../assets/business_type.png")}
                  property="business_type"
                  onChangeText={onChange}
                  value={business_type}
                />

                <CustomTextInput
                  placeholder="Direccion de su negocio"
                  keyboardType="default"
                  image={require("../../../../assets/street.png")}
                  property="address"
                  onChangeText={onChange}
                  value={address}
                />
              </>
            )}
            <CustomTextInput
              placeholder="Nombres"
              keyboardType="default"
              image={require("../../../../assets/user.png")}
              property="name"
              onChangeText={onChange}
              value={name}
            />

            <CustomTextInput
              placeholder="Apellidos"
              keyboardType="default"
              image={require("../../../../assets/my_user.png")}
              property="lastname"
              onChangeText={onChange}
              value={lastname}
            />

            <CustomTextInput
              placeholder="Departamento"
              keyboardType="default"
              image={require("../../../../assets/colombia.png")}
              property="departamento"
              onChangeText={onChange}
              value={departamento}
            />

            <CustomTextInput
              placeholder="Ciudad"
              keyboardType="default"
              image={require("../../../../assets/colombia1.png")}
              property="ciudad"
              onChangeText={onChange}
              value={ciudad}
            />


            <CustomTextInput
              placeholder="Correo electrónico"
              keyboardType="email-address"
              image={require("../../../../assets/email.png")}
              property="email"
              onChangeText={onChange}
              value={email}
              autoCapitalizeKeyboard={true}
            />

            <CustomTextInput
              placeholder="Celular"
              keyboardType="numeric"
              image={require("../../../../assets/phone.png")}
              property="phone"
              onChangeText={onChange}
              value={phone}
            />

            <CustomTextInput
              placeholder="Contraseña"
              keyboardType="default"
              image={require("../../../../assets/password.png")}
              property="password"
              onChangeText={onChange}
              value={password}
              secureTextEntry={true}
            />

            <CustomTextInput
              placeholder="Confirmar contraseña"
              keyboardType="default"
              image={require("../../../../assets/password.png")}
              property="confirmPassword"
              onChangeText={onChange}
              value={confirmPassword}
              secureTextEntry={true}
            />
            <View style={{ marginTop: 30 }}>
              <RoundedButton
                text="REGISTRAR"
                onPress={() =>
                  value === "TIENDA" ? registerStore() : register()
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />
      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={MyColors.primary}
        />
      )}
    </View>
  );
};
