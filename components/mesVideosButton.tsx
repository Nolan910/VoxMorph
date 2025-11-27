import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MesVideos() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/mes-videos');
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>Mes vidéos</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 60,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
