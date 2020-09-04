import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

import GoalItem from "./components/GoalItem";

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
              renderItem={itemData => <GoalItem title={itemData.item.value} />}
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
});
