import { View, Text, Pressable, StyleSheet } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";

export default function EnregistrerVideo() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [recording, setRecording] = useState(false);
  const cameraRef = useRef<any>(null);
  const router = useRouter();

   useEffect(() => {
    (async () => {
      const { status: camStatus } = await Camera.requestCameraPermissionsAsync();
      const { status: micStatus } = await Camera.requestMicrophonePermissionsAsync();

      setHasPermission(camStatus === "granted" && micStatus === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;

  if (hasPermission === false) {
    return (
      <Pressable
        style={styles.permissionButton}
        onPress={async () => {
          const { status: camStatus } = await Camera.requestCameraPermissionsAsync();
          const { status: micStatus } = await Camera.requestMicrophonePermissionsAsync();

          setHasPermission(camStatus === "granted" && micStatus === "granted");
        }}
      >
        <Text style={{ color: "white" }}>Autoriser caméra + micro</Text>
      </Pressable>
    );
  }

  const handleRecord = async () => {
    if (!recording) {
      setRecording(true);

      const video = await cameraRef.current.recordAsync();

      router.push({
        pathname: "/preview-video",
        params: { uri: video.uri },
      });

    } else {
      cameraRef.current.stopRecording();
      setRecording(false);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing="back"
        mode="video"
      />

      <Pressable style={styles.recordButton} onPress={handleRecord}>
        <Text style={styles.recordText}>
          {recording ? "Stop" : "Enregistrer"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1, width: "100%" },

  recordButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#111",
    borderRadius: 50,
  },
  recordText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  permissionButton: {
    marginTop: 100,
    padding: 20,
  },
});