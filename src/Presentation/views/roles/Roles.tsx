import React, {useState} from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native';
import useViewModel from './ViewModel';
import { RolesItem } from './Item';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'RolesScreen'>{};

export const RolesScreen = ({navigation, route}: Props) => {
  
  const {user} = useViewModel();
  const width = Dimensions.get('window').width; 
  const height = Dimensions.get('window').height; 
  const [mode, setMode] = useState<any>('horizontal-stack');
  const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left');
  console.log('User roles:', user?.roles);

  return (

  <GestureHandlerRootView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View>
        {/*<FlatList
          data = {user?.roles}
          renderItem = {({item}) => <RolesItem rol = {item} height={320} width = {width -100}/>}
          keyExtractor={(item) => item.id}
        />*/}

              <Carousel
                loop={true}
                width={width}
                height={height / 2}
                autoPlay={false}
                data={user?.roles!}
                scrollAnimationDuration={3000}
                renderItem= {({item}) =><RolesItem rol = {item} height={320} width = {width -100} navigation={navigation}/>}
                modeConfig={{
                  snapDirection,
                  stackInterval: 40
                }}
                mode={mode}
              />
    </View>

  </GestureHandlerRootView>
  )
}
