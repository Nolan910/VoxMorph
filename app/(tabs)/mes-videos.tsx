import { View, StyleSheet } from 'react-native';
import HomeButton from '../../components/homeButton';
import SelectionVideo from '../../components/selectionVideo';

export default function MesVideos() {
    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <HomeButton />
            </View>
            <View style={styles.selectionContainer}>
                <SelectionVideo />
                <SelectionVideo />
                <SelectionVideo />
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
    selectionContainer: {
        marginTop: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
    },
});