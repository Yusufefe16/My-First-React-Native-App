import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TextInput } from 'react-native';
import products from './components/product_data.json';

interface Product {
    id: number;
    title: string;
    imgURL: string;
    price: string;
    inStock: boolean;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: product.imgURL }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            {!product.inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
        </View>
    );
};

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>YUSUF STORE</Text>
            <TextInput style={styles.searchBar} placeholder="Ara..." />
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#800080',
        textAlign: 'center',
        marginBottom: 10,
    },
    searchBar: {
        height: 40,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        color: '#444',
        marginTop: 5,
    },
    outOfStock: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default App;
