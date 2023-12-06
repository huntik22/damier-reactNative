import React from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';

const data = [
  { id:1, name: 'Article 1', price: '20f', like: 15, image: require('./assets/adaptive-icon.png') },
  { id:2, name: 'Article 2', price: '30f', like: 20, image: require('./assets/favicon.png') },
  { id:3 ,name: 'Article 3', price: '25f', like: 10, image: require('./assets/icon.png') },
  { id:4, name: 'Article 4', price: '40f', like: 18, image: require('./assets/splash.png') },
//   { name: 'Article 5', price: '35f', like: 25, image: require('./assets/fond_image.jpg') },
];

const renderArticle = ({ item }) => (
  <View style={styles.articleContainer}>
    <Image source={item.image} style={styles.articleImage} />
    <Text style={styles.articleName}>{item.name}</Text>
    <Text style={styles.articlePrice}>{item.price}</Text>
    <Text style={styles.articleLike}>{`${item.like} likes`}</Text>
  </View>
);

const Application6 = () => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderArticle}
  />
);

const styles = StyleSheet.create({
  articleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  articleImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  articleName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  articleName: {
    color: 'black',
  },
  articlePrice: {
    color: 'gray',
  },
  articleLike: {
    color: 'red',
  },
});

export default Application6;
