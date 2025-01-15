import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000); // 3 seconds splash screen
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://icon-library.com/images/movie-icon-png/movie-icon-png-2.jpg' }} // Replace with a relevant splash image
        style={styles.image}
      />
      <Text style={styles.text}>Welcome to MovieApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
});
