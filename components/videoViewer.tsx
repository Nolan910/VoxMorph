import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function VideoViewer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vidéo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: height * 0.6,
    backgroundColor: '#d3d3d3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
   text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000ff',
  },
});
