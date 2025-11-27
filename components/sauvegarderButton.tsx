import { View, Text, StyleSheet } from 'react-native';

export default function Sauvegarder() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sauvegarder</Text>
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
