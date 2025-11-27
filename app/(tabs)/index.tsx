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
        <Enregistrement />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },

  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
