import { View, StyleSheet, Text } from 'react-native';
import { Video } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { useRef } from "react";

import Modificateur from '../../components/modificateurButton';
import RetourButton from '../../components/retourButton';
import Partager from '../../components/partagerButton';
import Sauvegarder from '../../components/sauvegarderButton';

export default function ModifierAudio() {
  const { uri } = useLocalSearchParams();
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>


      <View style={styles.topBar}>
        <RetourButton />
        <Modificateur />
      </View>

      <View style={styles.statusBar}>
        <Text style={styles.statusText}>Modificateur actif :</Text>
      </View>

      <View style={styles.videoZone}>
        <View style={styles.videoWrapper}>
          <Video
            ref={videoRef}
            style={styles.video}
            source={{ uri }}
            resizeMode="contain"
            useNativeControls
            shouldPlay
          />
        </View>
      </View>

      <View style={styles.bottomButtons}>
        <Partager />
        <Sauvegarder uri={uri}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "white",
  },

  topBar: {
    height: 90,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },

  statusBar: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 10,
    paddingHorizontal: 20,
  },

  statusText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4A90E2",
  },

  videoZone: {
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop : 20,
  },

  videoWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  video: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  bottomButtons: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 20,
    gap: 20,
  },
});

