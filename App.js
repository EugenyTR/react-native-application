import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
    };
    return (
        <View style={styles.headingPadding}>
          <View style={styles.flexibleRow}>
            <TextInput
                style={styles.textInputPadding}
                placeholder="Course Goal"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <FlatList
              keyExtractor={(item, index) => item.id}
              data={courseGoals}
              renderItem={itemData => (
              <View style={styles.listItem}>
                  <Text>{itemData.item.value}</Text>
              </View>
            )}
          />
        </View>
    );
}

const styles = StyleSheet.create({
  headingPadding: {
    paddingTop: 50,
  },
  textInputPadding: {
    padding: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
      width: '80%',
      marginBottom: '5%',
  },
    flexibleRow: {
      flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    goal: {
        width: '100%',
    },
    listItem: {
        padding: 10,
        backgroundColor: '#eee',
        borderColor: '#fff',
        borderWidth: 1,
    }
});
