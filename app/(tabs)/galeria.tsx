import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../constants/theme";

const { width } = Dimensions.get("window");

interface GaleriaItem {
  id: number;
  title: string;
  category: string;
  image: string;
  likes: number;
  liked: boolean;
}

interface LikesState {
  [key: number]: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 14,
    color: Colors.light.buttonSecondary,
  },

  galeryGrid: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  imageCard: {
    width: (width - 36) / 2,
    height: 180,
    borderRadius: 16,
    marginHorizontal: 6,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
    justifyContent: "space-between",
    padding: 12,
  },

  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  imageTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },

  imageBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

  imageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  likes: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  likeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  filterContainer: {
    paddingHorizontal: 12,
    marginBottom: 16,
    flexDirection: "row",
  },

  filterButton: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.light.card,
  },

  filterButtonActive: {
    backgroundColor: Colors.light.buttonPrimary,
  },

  filterText: {
    color: Colors.light.text,
    fontWeight: "bold",
    fontSize: 12,
  },

  filterTextActive: {
    color: "#fff",
  },
});

const galeriaData: GaleriaItem[] = [
  {
    id: 1,
    title: "Ferrari",
    category: "carros",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    likes: 234,
    liked: false,
  },
  {
    id: 2,
    title: "Moto Racing",
    category: "motos",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    likes: 456,
    liked: true,
  },
  {
    id: 3,
    title: "León",
    category: "animales",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    likes: 789,
    liked: false,
  },
  {
    id: 4,
    title: "Lamborghini",
    category: "carros",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763",
    likes: 567,
    liked: true,
  },
  {
    id: 5,
    title: "Moto Negra",
    category: "motos",
    image:
      "https://images.unsplash.com/photo-1518655048521-f130df041f66",
    likes: 345,
    liked: false,
  },
  {
    id: 6,
    title: "Tigre",
    category: "animales",
    image:
      "https://images.unsplash.com/photo-1549480017-d76466a4b7e8",
    likes: 678,
    liked: true,
  },
];

export default function GaleriaScreen() {
  const [selectedFilter, setSelectedFilter] = useState("todos");

  const [likes, setLikes] = useState<LikesState>(
    galeriaData.reduce((acc, item) => ({ ...acc, [item.id]: item.liked }), {})
  );

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "carros", label: "Carros" },
    { id: "motos", label: "Motos" },
    { id: "animales", label: "Animales" },
  ];

  const filteredGaleria =
    selectedFilter === "todos"
      ? galeriaData
      : galeriaData.filter((item) => item.category === selectedFilter);

  const handleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderImageCard = ({ item }: { item: GaleriaItem }) => (
    <View style={styles.imageCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.imageBackground}
        resizeMode="cover"
      />

      <View>
        <View style={styles.imageBadge}>
          <Text style={styles.badgeText}>{item.category.toUpperCase()}</Text>
        </View>
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>

      <View style={styles.imageFooter}>
        <Text style={styles.likes}>
          ❤️ {item.likes + (likes[item.id] ? 1 : 0)}
        </Text>

        <Pressable
          style={styles.likeButton}
          onPress={() => handleLike(item.id)}
        >
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <MaterialCommunityIcons
              name={likes[item.id] ? "heart" : "heart-outline"}
              size={18}
              color={likes[item.id] ? "red" : "#fff"}
            />
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>🖼️ Galería</Text>
        <Text style={styles.subtitulo}>Carros, motos y animales</Text>
      </View>

      <View style={styles.filterContainer}>
        {categories.map((cat) => (
          <Pressable
            key={cat.id}
            style={[
              styles.filterButton,
              selectedFilter === cat.id && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter(cat.id)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === cat.id && styles.filterTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={filteredGaleria}
        renderItem={renderImageCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        contentContainerStyle={styles.galeryGrid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}