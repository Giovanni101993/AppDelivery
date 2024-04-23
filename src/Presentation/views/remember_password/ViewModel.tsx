import { useState, useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { firebase } from '@react-native-firebase/auth';


const RememberPasswordViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    email: '',
  });


  const auth = getAuth();

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const remember = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(values.email);
      setErrorMessage('Se ha enviado un correo electrónico para restablecer la contraseña.');
    } catch (error) {
      console.error('Error al enviar correo de recuperación:', error);
      setErrorMessage('Error al enviar el correo electrónico. Por favor, inténtalo de nuevo.');
    }
  };

  const isValidForm = () => {
    if (values.email === '') {
      setErrorMessage('Ingresa el correo electrónico');
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    remember,
    errorMessage,
  };
};

export default RememberPasswordViewModel;
