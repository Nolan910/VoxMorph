import { Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Modificateur() {
  const router = useRouter(); 

  const handlePress = () => {
    router.push('/liste-modificateurs');
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>Modificateurs</Text>
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
