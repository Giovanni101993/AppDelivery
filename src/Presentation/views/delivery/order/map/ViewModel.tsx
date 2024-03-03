import * as Location from 'expo-location'
import React, { useEffect, useRef, useState, useContext } from 'react'
import MapView, { Camera } from 'react-native-maps';
import { Order } from '../../../../../Domain/entities/Order';
import { OrderContext } from '../../../../context/OrderContext';
import socket from '../../../../utils/SocketIO';

export const DeliveryOrderMapViewModel = (order: Order) => {
  
    const [messaggePermissions, setMessaggePermissions] = useState('');
    const [responseMessagge, setResponseMessagge] = useState('');
    const [position, setPosition] = useState<Location.LocationObjectCoords>();

    const [origin, setOrigin] = useState({
      latitude: 0.0,
      longitude: 0.0
    });

    const [destination, setDestination] = useState({
      latitude: order.address?.lat!,
      longitude: order.address?.lng!
    });

    const mapRef = useRef<MapView | null>(null);
    let  positionSuscription: Location.LocationSubscription;
    const {updateToDelivered} = useContext(OrderContext);

    const [refPoint, setRefPoint] = useState({
      name: '',
      latitude: 0.0,
      longitude: 0.0
    });

  useEffect(() => {

    socket.connect();
    socket.on('connect', () =>{
      console.log('-------SOCKET IO CONECTION-------');
    });

    const requestPermissions = async () => {
        const foreground = await Location.requestForegroundPermissionsAsync();

        if(foreground.granted){
            startForegroundUpdate();
        }
    }

    requestPermissions();
  }, [])

  const updateToDeliveredOrder = async() => {
    const result = await updateToDelivered(order);
    setResponseMessagge(result.message);
  }
  
  const onRegionChangeComplete = async (latitude: number, longitude: number) => {
    try {
      const place= await Location.reverseGeocodeAsync({
        latitude: latitude,
        longitude: longitude
      });
      let city;
      let street;
      let streetNumber;

      place.find(p => {
        city = p.city;
        street = p.street;
        streetNumber = p.streetNumber;
        setRefPoint({
          name: `${street}, ${streetNumber}, ${city}`,
          latitude: latitude,
          longitude: longitude
        });
      })
    } catch (error) {
      console.log('ERROR: ' + error);
      
    }
  }

  const startForegroundUpdate = async () => {
    const {granted} = await Location.getForegroundPermissionsAsync();

    if(!granted){
        setMessaggePermissions('No hay permiso de ubicación');
        return;
    }

    const location = await Location.getLastKnownPositionAsync();
    setPosition(location?.coords);
    setOrigin({
      latitude: location?.coords.latitude!,
      longitude: location?.coords.longitude!
    })

    const newCamera: Camera = {
        center: {latitude: location?.coords.latitude!, longitude: location?.coords.longitude!},
        zoom: 15,
        heading: 0,
        pitch: 0,
        altitude: 0,
    };
    mapRef.current?.animateCamera(newCamera, {duration: 3000});


    positionSuscription?.remove();

    positionSuscription = await Location.watchPositionAsync(
      {
      accuracy: Location.Accuracy.BestForNavigation
      },
      location =>{
        socket.emit('position', {
          id_order: order.id!,
          lat: location?.coords.latitude,
          lng: location?.coords.longitude
        });
        setPosition(location?.coords);
        const newCamera: Camera = {
          center: {latitude: location?.coords.latitude!, longitude: location?.coords.longitude!},
          zoom: 18,
          heading: 0,
          pitch: 0,
          altitude: 0,
        };
        mapRef.current?.animateCamera(newCamera, {duration: 3000});
      }
    ) 
  }

  const stopForegroundUpdate = () => {
    positionSuscription?.remove;
    setPosition(undefined);
  }

    return{
        messaggePermissions,
        position,
        mapRef,
        ...refPoint,
        origin,
        destination,
        socket,
        onRegionChangeComplete,
        stopForegroundUpdate,
        updateToDeliveredOrder,
        responseMessagge
    }
}

export default DeliveryOrderMapViewModel;
