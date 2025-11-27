import { Pressable, Text, StyleSheet } from 'react-native';

export default function PremiumButton() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Premium</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
