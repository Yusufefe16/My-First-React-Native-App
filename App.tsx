import React from "react";

import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.box_1} />
          <View style={styles.box_2} />
          <View style={styles.box_3} />
          <View style={styles.box_4} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_1: {
        width: 75,
        height: 75,
        backgroundColor: 'red',
    },
    box_2: {
        width: 75,
        height: 75,
        backgroundColor: 'blue',
    },
    box_3: {
        width: 75,
        height: 75,
        backgroundColor: 'aqua',
    },
    box_4: {
        width: 75,
        height: 75,
        backgroundColor: 'orange',
    },
});


export default App;

