import { View, StyleSheet } from 'react-native';
import { Video } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { useRef } from "react";

import Modificateur from '../../components/modificateurButton';
import HomeButton from '../../components/homeButton';
import VideoViewer from '../../components/videoViewer';
import Partager from '../../components/partagerButton';
import Sauvegarder from '../../components/sauvegarderButton';

export default function PreviewVideo() {
  const { uri } = useLocalSearchParams();
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <HomeButton />
        <Modificateur />
      </View>

        <Video
           ref={videoRef}
           style={styles.video}
           source={{ uri }}
           useNativeControls
           resizeMode="contain"
           shouldPlay
         />

      <View style={styles.bottomButtons}>
        <Partager />
        <Sauvegarder />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginTop: 40,
    alignItems: 'center',
  },

  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  video: {
    width: '100%',
    height: '70%',
    backgroundColor: "black",
  },

  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
});
