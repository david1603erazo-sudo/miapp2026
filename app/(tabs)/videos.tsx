import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { Colors } from "../constants/theme";

const { width } = Dimensions.get("window");

type VideoItem = {
  id: number;
  title: string;
  duration: string;
  category: string;
  url: string;
  thumbnail: string;
};

export default function VideosScreen() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videosData: VideoItem[] = [
    {
      id: 1,
      title: "Tutorial React Native",
      duration: "15:30",
      category: "educacion",
      url: "https://www.youtube.com/embed/U23lNFm_J70?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/U23lNFm_J70/0.jpg",
    },
    {
      id: 2,
      title: "Gráficas en Apps",
      duration: "12:45",
      category: "educacion",
      url: "https://www.youtube.com/embed/BH5K8DVwkJY?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/BH5K8DVwkJY/0.jpg",
    },
    {
      id: 3,
      title: "Diseño UI/UX",
      duration: "18:20",
      category: "design",
      url: "https://www.youtube.com/embed/qAG9OHma300?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/qAG9OHma300/0.jpg",
    },
    {
      id: 4,
      title: "Desarrollo Web Moderno",
      duration: "22:15",
      category: "educacion",
      url: "https://www.youtube.com/embed/Mus_vwhTCq0?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/Mus_vwhTCq0/0.jpg",
    },
  ];

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "educacion", label: "Educación" },
    { id: "design", label: "Diseño" },
  ];

  const filteredVideos =
    selectedCategory === "todos"
      ? videosData
      : videosData.filter((v) => v.category === selectedCategory);

  const renderVideoCard = ({ item }: { item: VideoItem }) => (
    <View style={styles.videoCard}>
      
      {/* Si el video está activo se reproduce */}
      {playingVideo === item.id ? (
        <WebView
          source={{ uri: item.url }}
          style={styles.video}
          allowsFullscreenVideo
          startInLoadingState
          renderLoading={() => (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={Colors.light.buttonPrimary}/>
              <Text style={{ marginTop: 10 }}>Cargando...</Text>
            </View>
          )}
        />
      ) : (
        <>
          <Image source={{ uri: item.thumbnail }} style={styles.video} />

          <Pressable
            style={styles.playButton}
            onPress={() => setPlayingVideo(item.id)}
          >
            <MaterialCommunityIcons name="play-circle" size={60} color="#fff" />
          </Pressable>
        </>
      )}

      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>{item.title}</Text>
        <Text style={styles.videoDuration}>⏱ {item.duration}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.titulo}>🎥 Videos</Text>
        <Text style={styles.subtitulo}>Aprende desarrollo y diseño</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((cat) => (
          <Pressable
            key={cat.id}
            style={[
              styles.categoryButton,
              selectedCategory === cat.id && styles.categoryActive,
            ]}
            onPress={() => setSelectedCategory(cat.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat.id && styles.categoryTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <FlatList
        data={filteredVideos}
        renderItem={renderVideoCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  header: {
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.text,
  },

  subtitulo: {
    fontSize: 14,
    color: Colors.light.buttonSecondary,
  },

  categories: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: Colors.light.card,
    borderRadius: 20,
    marginRight: 10,
  },

  categoryActive: {
    backgroundColor: Colors.light.buttonPrimary,
  },

  categoryText: {
    color: Colors.light.text,
  },

  categoryTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },

  grid: {
    paddingHorizontal: 12,
  },

  videoCard: {
    width: (width - 36) / 2,
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    overflow: "hidden",
    margin: 6,
    elevation: 4,
  },

  video: {
    width: "100%",
    height: 120,
  },

  playButton: {
    position: "absolute",
    top: 30,
    left: "35%",
  },

  videoInfo: {
    padding: 10,
  },

  videoTitle: {
    fontWeight: "bold",
    color: Colors.light.text,
  },

  videoDuration: {
    fontSize: 12,
    color: Colors.light.buttonSecondary,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

