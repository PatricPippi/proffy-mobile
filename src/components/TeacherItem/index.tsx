import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: "https://github.com/PatricPippi.png" }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Patric Pippi</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eos. Ullam ratione tempore quasi doloremque, labore eveniet voluptate dolorem dicta. Fugiat explicabo culpa sunt, vel magni adipisci corrupti autem error!
            </Text>
        </View>
    )
}

export default TeacherItem;
