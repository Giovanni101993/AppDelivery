import * as Location from 'expo-location'
import React, { useEffect, useRef, useState, useContext } from 'react'
import MapView, { Camera } from 'react-native-maps';
import { Order } from '../../../../../Domain/entities/Order';
import { OrderContext } from '../../../../context/OrderContext';
import socket from '../../../../utils/SocketIO';

export const ClientOrderMapViewModel = (order: Order) => {
  
    const [messaggePermissions, setMessaggePermissions] = useState('');
    const [responseMessagge, setResponseMessagge] = useState('');

    const [position, setPosition] = useState({
      latitude: 0.0,
      longitude: 0.0
    });

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
    socket.on('connect', () => {
      console.log('-----------SOCKET IO CONNECTION-----------');
    });

    socket.on(`position/${order.id!}`, (data)=> {
      setPosition({latitude: data.lat, longitude: data.lng});
    });

    const requestPermissions = async () => {
        const foreground = await Location.requestForegroundPermissionsAsync();

        if(foreground.granted){
            startForegroundUpdate();
        }
    }
    requestPermissions();
  }, [])

  const startForegroundUpdate = async () => {
    const {granted} = await Location.getForegroundPermissionsAsync();

    if(!granted){
        setMessaggePermissions('No hay permiso de ubicación');
        return;
    }

    const location = await Location.getLastKnownPositionAsync();
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
  }

    return{
        messaggePermissions,
        position,
        mapRef,
        ...refPoint,
        origin,
        destination,
        responseMessagge,
        socket
    }
}

export default ClientOrderMapViewModel;
