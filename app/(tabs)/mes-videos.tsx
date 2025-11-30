import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import RetourButton from '../../components/retourButton';

export default function MesVideos() {
  const [videos, setVideos] = useState([]);
  const router = useRouter();

  const fetchVideos = async () => {
    try {
      const res = await fetch(
        "https://voxmorph-backend-hbdv.onrender.com/api/videos/default-device"
      );

      const data = await res.json();
      setVideos(data);
    } catch (err) {
      alert("Erreur de chargement : " + err.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const renderVideo = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/modifier-audio",
          params: { uri: item.url }
        })
      }
    >
      <Image
        source={{ uri: item.url }}
        style={styles.thumbnail}
      />
      <Text style={styles.date}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.row}>
            <RetourButton />
          </View>
          <Text style={styles.title}>Mes Vidéos</Text>
      </View>

      <FlatList
        data={videos}
        keyExtractor={(item) => item._id}
        renderItem={renderVideo}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
header: {
  paddingTop: 60,
    paddingBottom: 10,
    width: "100%",
},
row: {
  width: "100%",
  alignItems: "flex-start",
  paddingHorizontal: 20,
},
title: {
  fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
},
  card: {
    width: "45%",
    margin: "2.5%",
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: 150,
    backgroundColor: "black",
  },
  date: {
    padding: 8,
    textAlign: "center",
  },
});
