import React, { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

/* COMPONENTE BADGE */
function Badge({ texto }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{texto}</Text>
    </View>
  );
}

/* COMPONENTE TARJETA */
function Tarjeta({ titulo, descripcion }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{titulo}</Text>
      <Text>{descripcion}</Text>
    </View>
  );
}

/* COMPONENTE CAMPO */
function Campo({ placeholder }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
    />
  );
}

export default function App() {

  const [estado, setEstado] = useState("Disponible");

  const cambiarEstado = () => {
    setEstado(estado === "Disponible" ? "Ocupado" : "Disponible");
  };

  return (
    <ScrollView style={styles.container}>

      {/* IMAGEN */}
      <Image
        source={require("./assets/perfil.jpg")}
        style={styles.image}
      />

      {/* TITULO Y SUBTITULO */}
      <Text style={styles.title}>Perfil de Usuario</Text>
      <Text style={styles.subtitle}>Información básica</Text>

      {/* ESTADO DINÁMICO */}
      <Text style={styles.estado}>Estado: {estado}</Text>
      <Button title="Cambiar estado" onPress={cambiarEstado} />

      {/* FORMULARIO */}
      <Text style={styles.section}>Formulario</Text>

      <Campo placeholder="Nombre" />
      <Campo placeholder="Apellido" />
      <Campo placeholder="Correo" />

      {/* TARJETAS */}
      <Text style={styles.section}>Información</Text>

      <Tarjeta
        titulo="Experiencia"
        descripcion="2 años aprendiendo desarrollo móvil."
      />

      <Tarjeta
        titulo="Estudios"
        descripcion="Ingeniería de Sistemas."
      />

      {/* BADGES */}
      <Text style={styles.section}>Habilidades</Text>

      <View style={styles.badgeContainer}>
        <Badge texto="React Native" />
        <Badge texto="JavaScript" />
        <Badge texto="Git" />
      </View>

    </ScrollView>
  );
}

/* ESTILOS */

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 60,
    marginBottom: 15
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 15,
    color: "gray"
  },

  estado: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold"
  },

  section: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginTop: 10,
    borderRadius: 8
  },

  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5
  },

  badgeContainer: {
    flexDirection: "row",
    marginTop: 10
  },

  badge: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 15,
    marginRight: 8
  },

  badgeText: {
    color: "white"
  }
});