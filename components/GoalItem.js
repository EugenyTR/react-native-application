import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
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
