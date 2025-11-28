import { Pressable, Text, StyleSheet } from 'react-native';

export default function PremiumButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Premium</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
      width: 220,
      paddingVertical: 14,
      backgroundColor: '#FFD700',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
    text: {
      color: '#1A1A1A',
      fontSize: 16,
      fontWeight: '700',
    }
});
