import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Link } from "expo-router";

import Modificateur from '../../components/modificateurButton';
import ImporterVideo from '../../components/importerVideoButton';
import MesVideos from '../../components/mesVideosButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Modificateur />
      </View>

      <View style={styles.middleContainer}>
        <ImporterVideo />
        <MesVideos />
      </View>

      <View style={styles.bottomContainer}>
        <Link href="/enregistrer-video" asChild>
          <Pressable style={styles.recordButton}>
            <Text style={styles.recordText}>Enregistrer</Text>
          </Pressable>
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fb",
    paddingTop: 80,
  },

  topBar: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  bottomContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },

  recordButton: {
    backgroundColor: "#111",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
  },

  recordText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
