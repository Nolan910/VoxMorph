import { View, Text, StyleSheet } from 'react-native';

export default function ImporterVideo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Importer une vidéo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 60,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

// import React, { useState } from 'react';
// import { Pressable, Text, StyleSheet } from 'react-native';

// export default function ImporterVideo() {
//   const [buttonColor, setButtonColor] = useState('#000000ff');

//   const handlePress = () => {
//     setButtonColor(buttonColor === '#000000ff' ? '#ff6347' : '#000000ff');
//   };

//   return (
//     <Pressable onPress={handlePress} style={[styles.container, { backgroundColor: buttonColor }]}>
//       <Text style={styles.text}>Importer une vidéo</Text>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 180,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white',
//   },
// });
