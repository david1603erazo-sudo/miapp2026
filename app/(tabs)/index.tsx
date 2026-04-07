import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../constants/theme";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 14,
    color: Colors.light.buttonSecondary,
  },

  cardPrincipal: {
    width: width - 32,
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    elevation: 8,
    marginHorizontal: 16,
  },

  cardTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },

  cardTexto: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 22,
    marginBottom: 16,
  },

  botonSecundario: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 12,
  },

  botonTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  gridCard: {
    width: (width - 48) / 2,
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    alignItems: "center",
  },

  gridIcon: {
    fontSize: 40,
    marginBottom: 12,
  },

  gridTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.text,
    textAlign: "center",
    marginBottom: 8,
  },

  gridValor: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.buttonPrimary,
  },

  estadoButtons: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 20,
    justifyContent: "space-between",
  },

  estadoBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    marginHorizontal: 5,
  },

  estadoActivo: {
    backgroundColor: Colors.light.success,
  },

  estadoInactivo: {
    backgroundColor: Colors.light.buttonSecondary,
  },
});

const GridCard = ({ icon, titulo, valor, color }: { icon: string; titulo: string; valor: string; color: string }) => (
  <View style={styles.gridCard}>
    <Text style={[styles.gridIcon, { color }]}>{icon}</Text>
    <Text style={styles.gridTitulo}>{titulo}</Text>
    <Text style={[styles.gridValor, { color }]}>{valor}</Text>
  </View>
);

export default function InicioScreen() {
  const [estado, setEstado] = useState("activo");

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.titulo}>🚀 DASHBOARD</Text>
        <Text style={styles.subtitulo}>
          Bienvenido a tu panel de control
        </Text>
      </View>

      <LinearGradient
        colors={[Colors.light.gradient1, Colors.light.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardPrincipal}
      >
        <Text style={styles.cardTitulo}>Resumen Semanal</Text>
        <Text style={styles.cardTexto}>
          Tu desempeño está mejorando cada día. ¡Sigue así!
        </Text>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.botonTexto}>Ver Detalles →</Text>
        </Pressable>
      </LinearGradient>

      <View style={styles.estadoButtons}>
        <Pressable
          style={[
            styles.estadoBtn,
            estado === "activo"
              ? styles.estadoActivo
              : { backgroundColor: Colors.light.card },
          ]}
          onPress={() => setEstado("activo")}
        >
          <Text
            style={{
              color: estado === "activo" ? "#000" : Colors.light.text,
              fontWeight: "bold",
            }}
          >
            ✓ Activo
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.estadoBtn,
            estado === "pausa"
              ? styles.estadoInactivo
              : { backgroundColor: Colors.light.card },
          ]}
          onPress={() => setEstado("pausa")}
        >
          <Text
            style={{
              color: estado === "pausa" ? "#000" : Colors.light.text,
              fontWeight: "bold",
            }}
          >
            ⏸ Pausa
          </Text>
        </Pressable>
      </View>

      <View style={styles.gridContainer}>
        <GridCard
          icon="📊"
          titulo="Ventas"
          valor="+45%"
          color={Colors.light.success}
        />
        <GridCard
          icon="👥"
          titulo="Clientes"
          valor="234"
          color={Colors.light.buttonSecondary}
        />
        <GridCard
          icon="💰"
          titulo="Ingresos"
          valor="$45K"
          color={Colors.light.warning}
        />
        <GridCard
          icon="⭐"
          titulo="Rating"
          valor="4.8/5"
          color={Colors.light.gradient1}
        />
      </View>
    </ScrollView>
  );
}     

