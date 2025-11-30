import { View, Text, Pressable, StyleSheet } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";

import RetourButton from "../../components/retourButton";

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
        pathname: "/modifier-audio",
        params: { uri: video.uri },
      });

    } else {
      cameraRef.current.stopRecording();
      setRecording(false);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <RetourButton />
      </View>

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
  topBar: {
    paddingTop: 40,
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  recordButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "red",
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