import { View, Text, StyleSheet } from 'react-native';

export default function Partager() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Partager</Text>
    </View>
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
