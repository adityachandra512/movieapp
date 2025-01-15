import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all').then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.header}>
        <Text style={styles.heading}>Movies<Text style={{ color: 'yellow' }}>512</Text></Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for movies..."
        placeholderTextColor="#aaa"
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <MovieCard movie={item.show} onPress={() => navigation.navigate('Details', { movie: item.show })} />
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 10,
    paddingTop: 20, // Increased top padding for more space
  },
  header: {
    marginBottom: 10, // Adds spacing below the heading
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchBar: {
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 10, // Prevents overlap with bottom navigation
  },
});
