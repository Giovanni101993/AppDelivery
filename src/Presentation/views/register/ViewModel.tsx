import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { RegisterWithImageAuthUseCase } from "../../../Domain/useCases/auth/RegisterWithImageAuth";
import { SaveUserLocalUseCase } from "../../../Domain/useCases/userLocal/SaveUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";
import appFirebase from "../../../../Credenciales";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"; //
import { RegisterStoreWithImageAuthUseCase } from "../../../Domain/useCases/authStore/RegisterStoreWithImageAuth";

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase); //


const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    name_store: "",
    address: "",
    business_type: "",
    departamento: "",
    ciudad: "",
    image: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  /*const ciudadesYDepartamentos: { [key: string]: string[] } = {
    Amazonas: ["Leticia","Puerto Nariño","La Chorrera","La Pedrera","Puerto Alegría","Puerto Arica","Puerto Santander","Tarapacá",],
    Antioquia: ["Medellín","Bello","Itagüí","Envigado","Apartadó","Rionegro","Turbo","Caucasia","Santa Rosa de Osos","Yarumal",],
    Arauca: ["Arauca", "Saravena", "Tame", "Arauquita"],
    Atlántico: ["Barranquilla","Soledad","Malambo","Sabanagrande","Galapa","Puerto Colombia","Baranoa","Palmar de Varela",],
    "Bogotá D.C.": ["Bogotá"],
    Bolívar: ["Cartagena","Magangué","Soledad","Ciénaga","El Carmen de Bolívar","Turbo","Arjona","San Jacinto","San Juan Nepomuceno",],
    Boyacá: ["Tunja","Duitama","Sogamoso","Chiquinquirá","Paipa","Soatá","Puerto Boyacá","Garagoa","Moniquirá","Santa Rosa de Viterbo",],
    Caldas: ["Manizales","La Dorada","Chinchiná","Villamaría","Riosucio","Aguadas","Salamina","Belalcázar","Palestina","Pácora",],
    Caquetá: ["Florencia","Puerto Rico","El Doncello","San Vicente del Caguán","Valparaíso","Solano","Albania","Morelia","Milán",],
    Casanare: ["Yopal","Villanueva","Tauramena","Aguazul","Paz de Ariporo","Maní","Orocué","Trinidad","Pore","San Luis de Palenque",],
    Cauca: ["Popayán","Santander de Quilichao","Patía","Puerto Tejada","Puerto López","Guapi","El Tambo","La Vega","La Sierra","Suárez",],
    Cesar: ["Valledupar","Aguachica","San Martín","Agustín Codazzi","Bosconia","Pelaya","Astrea","Gamarra","La Jagua de Ibirico","Curumaní",],
    Chocó: ["Quibdó","Nuquí","Condoto","Istmina","Tadó","Bahía Solano","Medio Baudó","Lloró","Acandí","El Carmen de Atrato",],
    Córdoba: ["Montería","Cereté","Lorica","Sahagún","Montelíbano","Tierralta","Planeta Rica","Puerto Escondido","Ayapel","Chimá",],
    Cundinamarca: ["Zipaquirá","Facatativá","Girardot","Chía","Soacha","Fusagasugá","Mosquera","Madrid","Funza","Sibaté",],
    Guainía: ["Inírida","Puerto Colombia","La Guadalupe","Mapiripana","Barranco Minas","San Felipe","Cacahual",],
    Guaviare: ["San José del Guaviare", "Calamar", "El Retorno", "Miraflores"],
    Huila: ["Neiva","Pitalito","Garzón","La Plata","Campoalegre","Palermo","Yaguará","Aipe","Acevedo","La Argentina",],
    "La Guajira": ["Riohacha","Maicao","Uribia","Manaure","Fonseca","Barrancas","Dibulla","Hatonuevo","San Juan del Cesar","Albania",],
    Magdalena: ["Santa Marta","Ciénaga","Fundación","Puebloviejo","El Banco","Aracataca","Plato","Zona Bananera","Santa Ana","San Sebastián de Buenavista",],
    Meta: ["Villavicencio","Acacías","Granada","Puerto López","Puerto Gaitán","La Macarena","Restrepo","Cumaral","Barranca de Upía","Castilla La Nueva",],
    Nariño: ["Pasto","Tumaco","Ipiales","Túquerres","El Charco","La Unión","San Pablo","La Cruz","El Tablón de Gómez","Samaniego",],
    "Norte de Santander": ["Cúcuta","Ocaña","Pamplona","Villa del Rosario","Los Patios","Chinácota","El Zulia","El Carmen","Tibú","La Playa de Belén",],
    Putumayo: ["Mocoa","Sibundoy","Puerto Asís","Villagarzón","Colón","San Francisco","Orito","La Hormiga","Puerto Caicedo","Puerto Guzmán",],
    Quindío: ["Armenia","Calarcá","Montenegro","La Tebaida","Quimbaya","Circasia","Salento","Filandia","Génova","Pijao",],
    Risaralda: ["Pereira","Dosquebradas","La Virginia","Santa Rosa de Cabal","Belén de Umbría","Marsella","Santuario","Quinchía","Apía","Pueblo Rico",],
    "San Andrés y Providencia": ["San Andrés", "Providencia"],
    Santander: ["Bucaramanga","Floridablanca","Girón","Piedecuesta","Barrancabermeja","Socorro","San Gil","Málaga","Puerto Wilches","El Socorro",],
    Sucre: ["Sincelejo","Corozal","San Marcos","Tolú","Coveñas","Morroa","Sampués","San Onofre","Los Palmitos","San Benito Abad",],
    Tolima: ["Ibagué","Espinal","Girardot","Líbano","Honda","Fresno","Anzoátegui","Mariquita","Chaparral","Rovira",],
    "Valle del Cauca": ["Cali","Buenaventura","Palmira","Tuluá","Buga","Yumbo","Cartago","Jamundí","La Unión","Candelaria",],
    Vaupés: ["Mitú", "Carurú", "Taraira", "Papunaua"],
    Vichada: ["Puerto Carreño", "La Primavera", "Cumaribo"],
  };

  const [departamento, setDepartamento] = useState(null);
  const [ciudad, setCiudad] = useState(null);
  const [openDepartamento, setOpenDepartamento] = useState(false);
  const [openCiudad, setOpenCiudad] = useState(false);

  const departamentosItems = Object.keys(ciudadesYDepartamentos).map(
    (depto) => ({ label: depto, value: depto })
  );
  const ciudadesItems = departamento
    ? ciudadesYDepartamentos[departamento].map((ciudad) => ({
        label: ciudad,
        value: ciudad,
      }))
    : [];

  useEffect(() => {
    if (departamento) {
      setCiudad(null);
    }
  }, [departamento]);*/



  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Cliente", value: "CLIENTE" },
    { label: "Tienda", value: "TIENDA" },
    { label: "Repartidor", value: "REPARTIDOR" },
  ]);

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const { user, getUserSession } = useUserLocal();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const saveUsers = async () => {
    try {
      await addDoc(collection(db, "usuarios"), {
        ...values,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      setLoading(true);

      try {
        // Crear usuario en Firebase Auth con email y contraseña
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        const response = await RegisterWithImageAuthUseCase(
          { ...values, value: value } as any,
          file!
        );
        setLoading(false);
        console.log("RESULT: " + JSON.stringify(response));

        if (response.success) {
          // Guardar información adicional del usuario en Firestore
          await addDoc(collection(db, "usuarios"), {
            uid: user.uid,

            ...values, // otras propiedades
          });

          await SaveUserLocalUseCase(response.data);
          getUserSession();
        } else {
          setErrorMessage(response.message);
        }
      } catch (error) {
        console.error("Error al crear usuario:", error);
        setErrorMessage("Error al registrarse");
        setLoading(false);
      }
    }
  };


  const registerStore = async () => {
    if (isValidForm()) {
      setLoading(true);

      try {
        // Crear usuario en Firebase Auth con email y contraseña
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        const response = await RegisterStoreWithImageAuthUseCase(
          { ...values, value: value } as any,
          file!
        );
        setLoading(false);
        console.log("RESULT: " + JSON.stringify(response));

        if (response.success) {
          // Guardar información adicional del usuario en Firestore
          await addDoc(collection(db, "store"), {
            uid: user.uid,

            ...values, // otras propiedades
          });

          await SaveUserLocalUseCase(response.data);
          getUserSession();
        } else {
          setErrorMessage(response.message);
        }
      } catch (error) {
        console.error("Error al crear usuario:", error);
        setErrorMessage("Error al registrarse");
        setLoading(false);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("Ingresa tu nombre");
      return false;
    }
    if (values.lastname === "") {
      setErrorMessage("Ingresa tu apellido");
      return false;
    }
    if (values.email === "") {
      setErrorMessage("Ingresa tu correo electrónico");
      return false;
    }
    if (values.phone === "") {
      setErrorMessage("Ingresa tu número de celular");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa tu contraseña");
      return false;
    }
    if (values.confirmPassword === "") {
      setErrorMessage("Repite tu contraseña");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return false;
    }
    if (values.image === "") {
      setErrorMessage("Seleccione una imagen");
      return false;
    }
    return true;
  };

  const resetForm = async () => {
    setValues({
      name: "",
      lastname: "",
      name_store: "",
      business_type: "",
      address: "",
      departamento: "",
      ciudad: "",
      email: "",
      image: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return {
    ...values,
    onChange,
    register,
    registerStore,
    pickImage,
    takePhoto,
    errorMessage,
    loading,
    user,
    open,
    setOpen,
    items,
    setItems,
    value,
    setValue,

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
  };
};

export default RegisterViewModel;
