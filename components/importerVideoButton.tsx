import { Pressable, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export default function ImporterVideo() {
  const router = useRouter();

  const pickVideo = async () => {
    try {

      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        return Alert.alert("Permission refusée", "Autorisez l'accès à la galerie.");
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        quality: 1,
      });

      if (result.canceled) return;

      const uri = result.assets[0].uri;

      router.push({
        pathname: "/modifier-audio",
        params: { uri }
      });

    } catch (err) {
      Alert.alert("Erreur", err.message);
    }
  };

  return (
    <Pressable style={styles.button} onPress={pickVideo}>
      <Text style={styles.text}>Importer une vidéo</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 220,
    paddingVertical: 14,
    backgroundColor: '#111',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});
