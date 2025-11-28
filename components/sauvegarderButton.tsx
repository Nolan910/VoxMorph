import { View, Text, StyleSheet } from 'react-native';

export default function Sauvegarder() {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>Sauvegarder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
      width: 220,
      paddingVertical: 14,
      backgroundColor: "#111",
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    }
});
