import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.flexibleRow}>
                <TextInput
                    style={styles.textInputPadding}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonStyle}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    textInputPadding: {
        padding: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        width: '80%',
        marginBottom: '5%',
    },
    flexibleRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        width: '40%'
    },
});

export default GoalInput;
