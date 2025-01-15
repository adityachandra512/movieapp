import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function SearchScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length > 2) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${term}`).then((response) => {
        setResults(response.data);
      });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.header}>
                <Text style={styles.heading}>Movies<Text style={{ color: 'yellow' }}>512</Text></Text>
              </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Type to search..."
        placeholderTextColor="#aaa"
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.show.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate('Details', { movie: item.show })} // Navigate to Details with movie data
          />
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
    paddingTop: 10,
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
    paddingBottom: 10,
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
});
