import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Todo } from "../types/Todos";

interface TodoRowProps {
  item: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function Row({ item, onToggle, onDelete }: Readonly<TodoRowProps>) {
  return (
    <Pressable 
      style={({ pressed }) => [ 
        styles.todoRow, 
        pressed && styles.pressedRow, ]} 
      onPress={() => onToggle(item.id)}
      onLongPress={() => onDelete(item.id)}
      delayLongPress={600}
    >
      <Text style={[styles.todoText, item.completed && styles.completedText]}>
        {item.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  todoRow: {
    flexDirection: "row",
    backgroundColor: "#79707070",
    padding: 8,
    marginHorizontal: 16,
    marginBottom: 8,
    borderColor: "#c1c0c0",
    borderWidth: 1,
    borderRadius: 8,
  },
  pressedRow: {
    opacity: 0.6,
  },
  todoText: {
    fontSize: 16,
    flex: 1,
    color: "#000",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#0d722386",
    fontSize: 12,

  },
});
