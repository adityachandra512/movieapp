import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.image?.medium }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.summary} numberOfLines={3}>
          {movie.summary?.replace(/<[^>]*>/g, '')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#222',
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    color: '#aaa',
    fontSize: 14,
  },
});
