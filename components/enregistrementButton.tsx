import { Text, StyleSheet, Pressable } from "react-native";
import { Camera } from "expo-camera";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";
import { View } from "react-native";

export default function Enregistrement() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [recording, setRecording] = useState(false);
  const cameraRef = useRef(null);
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <Pressable style={styles.circle} onPress={requestPermission}>
        <Text style={styles.text}>Autoriser caméra</Text>
      </Pressable>
    );
  }

  const handlePress = async () => {
    if (!recording) {
      setRecording(true);
      const video = await cameraRef.current.recordAsync();
    } else {
      cameraRef.current.stopRecording();
      setRecording(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} />

      <Pressable onPress={handlePress} style={styles.circle}>
        <Text style={styles.text}>
          {recording ? "Stop" : "Enregistrement"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});
