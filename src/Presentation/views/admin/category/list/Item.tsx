import React from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';
import { User } from '../../../../../Domain/entities/User';

interface Props{
    category: Category;
    user: User;
    remove: (id: string) => void;
}

export const AdminCategoryListItem = ({category, user, remove}: Props) => {
    
    const navigation = useNavigation<StackNavigationProp<CategoryStackParamList>>();

  return (
    <TouchableOpacity
        onPress={() => navigation.navigate('AdminProductNavigator', {category: category, user: user})}
    >
        <View style = {styles.container}>
            <Image
                style = {styles.image}
                source = {{uri: category.image}}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{category.name}</Text>
                <Text style={styles.description}>{category.description}</Text>
            </View>

            <View style={styles.actionContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AdminCategoryUpdateScreen', {category: category})}
                >
                    <Image
                        style={styles.actionImage}
                        source={require('../../../../../../assets/edit.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => remove(category.id!)}
                >
                    <Image
                        style={styles.actionImage}
                        source={require('../../../../../../assets/trash.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.divider}></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({

    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        height: 72,
        marginHorizontal: 20,
        marginTop: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 15
    },
    info: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 18
    },
    description: {
        color: 'gray',
        fontSize: 14,
        marginTop: 3
    },
    actionContainer: {
        marginRight: 40,
        
    },
    actionImage: {
        width: 30,
        height: 30,
        marginVertical: 2
    },
    divider:{
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 25,
        flex: 1,
        marginVertical: 4
    }
});
