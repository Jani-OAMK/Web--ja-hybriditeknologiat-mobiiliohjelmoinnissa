import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerBar}>
      <Text style={styles.title}>Todo list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#f1eded",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
