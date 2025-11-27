import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function selectionModificateur() {
  return (
  <View style={styles.selectionContainer}>
    <Text style={styles.text}>Modificateur</Text>
  </View> 
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
