import { Text, StyleSheet, Pressable, NativeModules } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from "react"

const { VideoRecorder } = NativeModules;

export default function Enregistrement() {

  const [recording, setRecording] = useState(false);
  const router = useRouter();

  const handlePress = async () => {
    console.log("NativeModules:", NativeModules);

    if (!recording) {
      await VideoRecorder.startRecording();
      setRecording(true);
    } else {
      const uri = await VideoRecorder.stopRecording();
      setRecording(false);

      router.push({
          pathname: "/preview-video",
          params: { uri }
        });
     }
  };

  return (
        <Pressable onPress={handlePress} style={styles.circle}>
        <Text style={styles.text}>
           {recording ? "Stop" : "Enregistrement"}
        </Text>
        </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#111",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});
