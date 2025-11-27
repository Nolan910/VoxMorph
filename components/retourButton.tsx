import { Pressable, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function BackButton() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} style={styles.container}>
      <Text style={styles.text}>Retour</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
