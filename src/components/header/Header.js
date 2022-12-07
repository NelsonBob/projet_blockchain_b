import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import headerStyles from './Style';

const Header = ({ screen }) => {
    const navigation = useNavigation();
    return (
        <View style={headerStyles.container}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <Text>{screen}</Text>
            </View>
        </View>
    )
}

export default Header
