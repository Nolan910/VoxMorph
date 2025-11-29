import { View, Text, StyleSheet, Pressable } from "react-native";
import { Video } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useRef } from "react";

export default function PreviewVideo() {
  const { uri } = useLocalSearchParams();
  const videoRef = useRef(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri }}
        useNativeControls
        resizeMode="contain"
        shouldPlay
      />

      <Pressable
        style={styles.cancelButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.cancelText}>Retour</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", justifyContent: "center" },
  video: { width: "100%", height: "80%" },
  cancelButton: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#ff4444",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  cancelText: { color: "white", fontSize: 16 },
});
