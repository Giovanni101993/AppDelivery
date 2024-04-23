import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Category } from '../../Domain/entities/Category';
import { CategoryProvider } from '../context/CategoryContext';
import { AdminCategoryUpdateScreen } from '../views/admin/category/update/CategoryUpdate';
import { AdminCategoryCreateScreen } from '../views/admin/category/create/CategoryCreate';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { Image, TouchableOpacity } from 'react-native';
import { AdminProductNavigator } from './AdminProductNavigator';
import { ShopCategoryListScreen } from '../views/shop/category/list/CategoryList';
import { User } from '../../Domain/entities/User';

export type CategoryStackParamList = {
    ShopCategoryListScreen: undefined,
    AdminProductNavigator: {category: Category, user: User}
}

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export const ShopCategoryNavigator = () => {
  return (
     <CategoryState>

<Stack.Navigator screenOptions={{
          headerShown: false
        }}>

            <Stack.Screen
              name="ShopCategoryListScreen"
              component={ShopCategoryListScreen}
              options={ ({route, navigation}) => (
                {
                  headerShown: true,
                  title: 'Categorias',
                }
            )}
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
