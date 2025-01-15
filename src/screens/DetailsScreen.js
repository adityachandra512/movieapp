import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Movie Poster */}
      <Image source={{ uri: movie.image?.original || movie.image?.medium }} style={styles.image} />

      {/* Movie Title */}
      <Text style={styles.title}>{movie.name}</Text>

      {/* Movie Metadata */}
      <View style={styles.metadataContainer}>
        {movie.rating?.average && (
          <Text style={styles.metadataText}>
            ⭐ {movie.rating.average} / 10
          </Text>
        )}
        {movie.genres?.length > 0 && (
          <Text style={styles.metadataText}>
            🎭 {movie.genres.join(', ')}
          </Text>
        )}
        {movie.runtime && (
          <Text style={styles.metadataText}>
            ⏳ {movie.runtime} min
          </Text>
        )}
        {movie.premiered && (
          <Text style={styles.metadataText}>
            📅 Premiered: {movie.premiered}
          </Text>
        )}
      </View>

      {/* Movie Summary */}
      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.summary}>
        {movie.summary?.replace(/<[^>]*>/g, '') || 'No summary available.'}
      </Text>

      {/* Additional Details */}
      <Text style={styles.sectionTitle}>Additional Details</Text>
      <View style={styles.additionalDetailsContainer}>
        <Text style={styles.additionalDetailsText}>
          <Text style={styles.bold}>Language:</Text> {movie.language}
        </Text>
        <Text style={styles.additionalDetailsText}>
          <Text style={styles.bold}>Status:</Text> {movie.status}
        </Text>
        <Text style={styles.additionalDetailsText}>
          <Text style={styles.bold}>Network:</Text> {movie.network?.name || 'N/A'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  metadataContainer: {
    flexDirection: 'column',  // Updated to stack items vertically
    alignItems: 'flex-start',  // Align items to the start of the container
    marginBottom: 20,
  },
  metadataText: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 5,  // Added spacing between items
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 5,
  },
  summary: {
    color: '#ddd',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  additionalDetailsContainer: {
    marginBottom: 20,
  },
  additionalDetailsText: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
