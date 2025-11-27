import { View, StyleSheet } from 'react-native';
import BackButton from '../../components/retourButton';
import PremiumButton from '../../components/premiumButton';
import RondModificateur from '../../components/selectionModificateurButtons';

export default function ListeModificateur() {

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <BackButton />
        <View style={styles.spacer} />
        <PremiumButton />
      </View>


      <View style={styles.selectionContainer}>
        <RondModificateur />
        <RondModificateur />
        <RondModificateur />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  spacer: {
    flex: 1,
  },
  selectionContainer: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
});
