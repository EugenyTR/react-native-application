import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#eee',
        borderColor: '#fff',
        borderWidth: 1,
    }
});

export default GoalItem;
