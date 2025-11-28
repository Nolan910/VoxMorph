import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function selectionModificateur() {
  return (
  <View style={styles.button}>
    <Text style={styles.text}>Modificateur</Text>
  </View> 
  );
}

const styles = StyleSheet.create({
  button: {
    width: (width - 100) / 3,
        aspectRatio: 1,
        borderRadius: 999,
        backgroundColor: "#111",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
      },
      text: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
      }
});
