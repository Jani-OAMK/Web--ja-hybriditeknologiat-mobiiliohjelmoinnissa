import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Row from "./components/Row";
import Header from "./components/Header";
import type { Todo } from "./types/Todos";

const STORAGE_KEY = "@todos_list";

export default function App() {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (jsonValue !== null) {
          setTasks(JSON.parse(jsonValue));
        }
      } catch (err) {
        console.error("Error on loading:", err);
      }
    };
    loadTasks();
  }, []);

  const saveTasks = async (updatedTasks: Todo[]) => {
    setTasks(updatedTasks);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
    } catch (err) {
      console.error("Error on saving:", err);
    }
  };

  const addTask = () => {
    if (!input.trim()) return;
    const id = Date.now() + 1;
    const todo: Todo = { id, text: input, completed: false };
    const updatedTasks = [...tasks, todo];
    //setTasks([...tasks, todo]);
    saveTasks(updatedTasks);
    setInput("");
    console.log("New task added and saved");
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter task"
        onSubmitEditing={addTask}
      />
      <FlatList<Todo>
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Row item={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eded",
  },
  input: {
    marginHorizontal: 16,
    padding: 8,
    marginBottom: 8,
  },
});
