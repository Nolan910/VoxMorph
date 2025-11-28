import { View, StyleSheet } from 'react-native';
import Modificateur from '../../components/modificateurButton';
import ImporterVideo from '../../components/importerVideoButton';
import MesVideos from '../../components/mesVideosButton';
import Enregistrement from '../../components/enregistrementButton';

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
            <Enregistrement />
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
});
