import React, {
  useState
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default function App() {
  return ( 
    <View style={styles.headingPadding}>
      <View>
        <TextInput style={styles.textInputPadding} placeholder="Course Goal" />
        <Button title="ADD" />
      </View>
      <View>
      
      </View>
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
  },
});