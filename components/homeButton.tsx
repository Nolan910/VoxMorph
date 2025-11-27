import { Pressable, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeButton() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/');
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>Home</Text>
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
