import { Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Enregistrement() {

   const router = useRouter();

  const handlePress = () => {
    router.push('/modifier-audio');
  };

  return (
        <Pressable onPress={handlePress} style={styles.circle}>
        <Text style={styles.text}>Enregistrement</Text>
        </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,           
    backgroundColor: '#000000ff', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,        
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
