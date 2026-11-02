import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState("");
  const ageAsNumber = Number(age);
  const lower =
    ageAsNumber > 0 && ageAsNumber <= 120 ? (220 - ageAsNumber) * 0.65 : 0;
  const upper =
    ageAsNumber > 0 && ageAsNumber <= 120 ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>

      <Text>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
        placeholder="0"
      />

      <Text>Lower limit: {lower.toFixed(1)} bpm</Text>
      <Text>Upper limit: {upper.toFixed(1)} bpm</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#615c5c",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    width: 100,
    height: 45,

    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: "center",
    marginVertical: 15,
  },
});
