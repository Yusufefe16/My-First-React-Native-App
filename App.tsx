import React from "react";

import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

function App() {
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.card_container}>
              <View style={styles.card_body}>
                  <Text style={styles.card_title}>John Snow</Text>
                  <Text style={styles.card_text}>Winter is coming..</Text>
              </View>
              <TouchableOpacity style={styles.card_button_container}>
                  <Text style={styles.card_button_title}>I LIKED</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
    card_container: {
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
    },
    card_body: {
        padding: 10,
    },
    card_title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
        marginBottom: 3,
    },
    card_text: {
        fontSize: 18,
        margin: 10,
        marginTop: 3,
    },
    card_button_container: {
        backgroundColor: '#00c2ff',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    card_button_title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});


export default App;

