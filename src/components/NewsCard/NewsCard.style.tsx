import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
    },
    image: {
        height: Dimensions.get('window').height / 4,
    },
    inner_container:{
        padding: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    author:{
        fontStyle: 'italic',
        textAlign: 'right',
        fontSize: 14,
        marginVertical: 10,
    },

});
