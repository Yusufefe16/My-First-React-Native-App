import React from 'react';
import {Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

interface News {
    u_id: number;
    author: string;
    title: string;
    description: string;
    imageUrl: string;
}

function App() {
    const renderNews = ({ item }: { item: News }) => <NewsCard news={item} />

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header_text}>News</Text>
                <FlatList
                    ListHeaderComponent={()=> (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                news_banner_data.map(
                                    (bannerNews: { id: number; imageUrl: string}) =>
                                        <Image style={styles.banner_image} source={{ uri: bannerNews.imageUrl}} />
                                )
                            }
                        </ScrollView>
                    )}
                    keyExtractor={(item) => item.u_id.toString()}
                    data={news_data}
                    renderItem={renderNews}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1',
    },
    banner_image: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 50,
    }
});





export default App;

