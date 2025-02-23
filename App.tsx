import React from "react";

import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.upper_view_container}>
              <Text >Hello World</Text>
          </View>
          <View style={styles.center_view_container}>
              <Text >Hello World2</Text>
          </View>
          <View style={styles.bottom_view_container}>
              <Text >Merhaba Dünya</Text>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    upper_view_container: {
        flex: 1,
        backgroundColor: 'red',
    },
    center_view_container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    bottom_view_container: {
        flex: 2,
        backgroundColor: 'blue',
    },
});


export default App;

