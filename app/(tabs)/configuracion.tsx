import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { Colors } from "../constants/theme";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    alignItems: "center",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 30,
  },

  form: {
    width: width * 0.8,
    alignItems: "center",
  },

  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: Colors.light.card,
    color: Colors.light.text,
  },

  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default function ConfiguracionScreen() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (brand && model && price) {
      Alert.alert("Éxito", `Carro ${brand} ${model} agregado por $${price}`);
      setBrand("");
      setModel("");
      setPrice("");
    } else {
      Alert.alert("Error", "Por favor, completa todos los campos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🚘 Formulario de Ventas</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Marca"
          value={brand}
          onChangeText={setBrand}
        />
        <TextInput
          style={styles.input}
          placeholder="Modelo"
          value={model}
          onChangeText={setModel}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Agregar Carro</Text>
        </Pressable>
      </View>
    </View>
  );
}
