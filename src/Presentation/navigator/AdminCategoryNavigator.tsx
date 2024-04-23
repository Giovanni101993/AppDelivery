import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Category } from '../../Domain/entities/Category';
import { CategoryProvider } from '../context/CategoryContext';
import { AdminCategoryUpdateScreen } from '../views/admin/category/update/CategoryUpdate';
import { AdminCategoryCreateScreen } from '../views/admin/category/create/CategoryCreate';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { Image, TouchableOpacity } from 'react-native';
import { AdminProductNavigator } from './AdminProductNavigator';
import { User } from '../../Domain/entities/User';
import { AdminPaymentNavigator } from './AdminPaymentNavigator';

export type CategoryStackParamList = {
    AdminCategoryListScreen: undefined,
    AdminCategoryCreateScreen: undefined,
    AdminCategoryUpdateScreen: {category: Category},
    AdminProductNavigator: {category: Category, user:User},
    AdminPaymentNavigator:{user: User}
}

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export const AdminCategoryNavigator = () => {
  return (
     <CategoryState>

<Stack.Navigator screenOptions={{
          headerShown: false
        }}>

            <Stack.Screen
              name="AdminCategoryListScreen"
              component={AdminCategoryListScreen}
              options={ ({route, navigation}) => (
                {
                  headerShown: true,
                  title: 'Categorias',
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('AdminCategoryCreateScreen')}>
                      <Image 
                        source={ require('../../../assets/add.png') }
                        style={{ width:35, height: 35 }}
                      />
                    </TouchableOpacity>
                  )
                }
            )}
            />
            <Stack.Screen
              name="AdminCategoryCreateScreen"
              component={AdminCategoryCreateScreen}
              options={{
                headerShown: true,
                title: 'Nueva categoria'
              }}
            />

            <Stack.Screen
              name="AdminCategoryUpdateScreen"
              component={AdminCategoryUpdateScreen}
              options={{
                headerShown: true,
                title: 'Editar categoria'
              }}
            />
            
            <Stack.Screen
              name="AdminProductNavigator"
              component={AdminProductNavigator}              
              />
        </Stack.Navigator>
        
    </CategoryState>
  )
}

const CategoryState = ({children}: any) => {
  return (
    <CategoryProvider>
      { children }
    </CategoryProvider>
  )
  }
