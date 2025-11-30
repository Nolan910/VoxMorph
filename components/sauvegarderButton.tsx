import { View, Text, StyleSheet, Pressable, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from "expo-router";

export default function Sauvegarder({ uri }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

 const uploadVideoToBackend = async (localUri) => {
     const formData = new FormData();

     formData.append("video", {
       uri: localUri,
       type: "video/mp4",
       name: "voxmorph_video.mp4",
     });

     const res = await fetch("https://voxmorph-backend-hbdv.onrender.com/api/videos/upload", {
       method: "POST",
       headers: {
           "Content-Type": "multipart/form-data",
           "Accept": "application/json",
         },
       body: formData,
     });

     if (!res.ok) {
       const errorText = await res.text();
       throw new Error("Upload Backend Error: " + errorText);
     }

     return await res.json();
   };

    const saveVideoInfo = async ({ url, publicId }) => {
      const deviceId = "default-device";

      const res = await fetch("https://voxmorph-backend-hbdv.onrender.com/api/videos/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, url, publicId }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error("Save MongoDB Error: " + errorText);
      }
    };

  const handleSave = async () => {
    try {
      setLoading(true);

      const uploadResult = await uploadVideoToBackend(uri);
      await saveVideoInfo(uploadResult);

      Alert.alert("Succès", "Vidéo sauvegardée !", [
      {
        text: "OK",
        onPress: () => router.push("/"),
      },
    ]);
    } catch (err) {
      Alert.alert(
        "Erreur lors de la sauvegarde",
        err.message ?? JSON.stringify(err)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Pressable onPress={handleSave} style={styles.button} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>Sauvegarder</Text>
      )}
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
  },
});
