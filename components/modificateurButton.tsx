import { Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Modificateur() {
  const router = useRouter(); 

  const handlePress = () => {
    router.push('/liste-modificateurs');
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>Modificateurs</Text>
    </Pressable>
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
