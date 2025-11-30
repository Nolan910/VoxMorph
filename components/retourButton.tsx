import { Pressable, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function BackButton() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Text style={styles.text}>Retour</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
      width: 120,
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
