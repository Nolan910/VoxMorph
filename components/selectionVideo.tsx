import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';  // Importer useRouter

const { width } = Dimensions.get('window');

export default function SelectionVideo() {
  const router = useRouter();  // Initialiser le hook useRouter

  const handlePress = () => {
    router.push('/modifier-audio');  // Naviguer vers la page "modifier-audio"
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.selectionContainer}>
        <Text style={styles.text}>Video</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  selectionContainer: {
    width: (width - 100) / 3,
    aspectRatio: 1, 
    borderRadius: 999, 
    backgroundColor: '#4A90E2',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
