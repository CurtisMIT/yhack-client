import React from 'react';
import { View, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default ({
    captures = [],
    albumToggle
}) => (
    <ScrollView
        horizontal={false}
    >
        <StatusBar hidden={true} />
        {captures.map(({ uri }) => (
            <View style={styles.galleryImageContainer} key={uri}>
                <Image source={{ uri }} style={styles.galleryImage} />
            </View>
        ))}
        <TouchableOpacity onPress={albumToggle}>
            <Entypo 
                name='cross'
                color='black'
                size={30}
            />
        </TouchableOpacity>
    </ScrollView>
)