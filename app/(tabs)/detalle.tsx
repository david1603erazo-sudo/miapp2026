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

  chartContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  chartCard: {
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },

  chartTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 16,
  },

  barChart: {
    marginBottom: 20,
  },

  barRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  barLabel: {
    width: 40,
    fontSize: 12,
    color: Colors.light.text,
    fontWeight: "bold",
  },

  barContainer: {
    flex: 1,
    height: 24,
    backgroundColor: Colors.light.background,
    borderRadius: 4,
    marginHorizontal: 10,
    overflow: "hidden",
  },

  bar: {
    height: "100%",
    borderRadius: 4,
  },

  barValue: {
    width: 35,
    textAlign: "right",
    fontSize: 12,
    color: Colors.light.success,
    fontWeight: "bold",
  },

  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 20,
    gap: 12,
  },

  metricCard: {
    width: (width - 48) / 2,
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    padding: 16,
    elevation: 4,
    alignItems: "center",
  },

  metricNumber: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },

  metricLabel: {
    fontSize: 12,
    color: Colors.light.buttonSecondary,
    textAlign: "center",
  },

  tabButtons: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 20,
    gap: 8,
  },

  tabBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.light.card,
  },

  tabBtnActive: {
    backgroundColor: Colors.light.buttonPrimary,
  },

  tabText: {
    color: Colors.light.text,
    fontWeight: "bold",
    fontSize: 12,
  },

  pieChartContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },

  circleChart: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },

  circleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },

  legendLabel: {
    fontSize: 12,
    color: Colors.light.text,
  },
});

const barData = [
  { label: "Ene", value: 65, color: Colors.light.gradient1 },
  { label: "Feb", value: 78, color: Colors.light.gradient2 },
  { label: "Mar", value: 55, color: Colors.light.success },
  { label: "Abr", value: 88, color: Colors.light.warning },
  { label: "May", value: 72, color: Colors.light.danger },
];

export default function DetalleScreen() {
  const [activeTab, setActiveTab] = useState("ventas");

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.titulo}>📊 Gráficas</Text>
        <Text style={styles.subtitulo}>Análisis de datos y estadísticas</Text>
      </View>

      <View style={styles.tabButtons}>
        <Pressable
          style={[
            styles.tabBtn,
            activeTab === "ventas" && styles.tabBtnActive,
          ]}
          onPress={() => setActiveTab("ventas")}
        >
          <Text style={styles.tabText}>Ventas</Text>
        </Pressable>
        <Pressable
          style={[
            styles.tabBtn,
            activeTab === "clientes" && styles.tabBtnActive,
          ]}
          onPress={() => setActiveTab("clientes")}
        >
          <Text style={styles.tabText}>Clientes</Text>
        </Pressable>
        <Pressable
          style={[styles.tabBtn, activeTab === "datos" && styles.tabBtnActive]}
          onPress={() => setActiveTab("datos")}
        >
          <Text style={styles.tabText}>Datos</Text>
        </Pressable>
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.chartCard}>
          <Text style={styles.chartTitulo}>Gráfico de Barras - Ingresos Mensuales</Text>
          <View style={styles.barChart}>
            {barData.map((item, index) => (
              <View key={index} style={styles.barRow}>
                <Text style={styles.barLabel}>{item.label}</Text>
                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      {
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.barValue}>${item.value}K</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.metricsGrid}>
        <View style={styles.metricCard}>
          <Text style={[styles.metricNumber, { color: Colors.light.success }]}>
            +45%
          </Text>
          <Text style={styles.metricLabel}>Crecimiento Ventas</Text>
        </View>
        <View style={styles.metricCard}>
          <Text
            style={[styles.metricNumber, { color: Colors.light.buttonSecondary }]}
          >
            234
          </Text>
          <Text style={styles.metricLabel}>Clientes Nuevos</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={[styles.metricNumber, { color: Colors.light.warning }]}>
            89.5%
          </Text>
          <Text style={styles.metricLabel}>Tasa de Conversión</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={[styles.metricNumber, { color: Colors.light.gradient1 }]}>
            $2.4M
          </Text>
          <Text style={styles.metricLabel}>Ingresos Totales</Text>
        </View>
      </View>

      <View style={styles.pieChartContainer}>
        <Text style={styles.chartTitulo}>Distribución de Ventas</Text>
        <View
          style={[
            styles.circleChart,
            { backgroundColor: Colors.light.buttonPrimary },
          ]}
        >
          <Text style={styles.circleText}>72%</Text>
        </View>

        <View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: Colors.light.gradient1 }]}
            />
            <Text style={styles.legendLabel}>Producto A - 45%</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: Colors.light.gradient2 }]}
            />
            <Text style={styles.legendLabel}>Producto B - 27%</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: Colors.light.success }]}
            />
            <Text style={styles.legendLabel}>Producto C - 28%</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}