import React from "react";

import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
      <SafeAreaView>
          <View >
              <Text style={styles.container}>Hello World</Text>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


export default App;

