import {StyleSheet} from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        overflow: 'hidden',
    },
    body: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
        marginBottom: 3,
    },
    text: {
        fontSize: 18,
        margin: 10,
        marginTop: 3,
    },
    button_container: {
        backgroundColor: '#00c2ff',
        padding: 10,
        alignItems: 'center',
        //borderBottomLeftRadius: 10,
        //borderBottomRightRadius: 10,
    },
    button_title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
