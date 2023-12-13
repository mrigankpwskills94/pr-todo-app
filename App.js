import { View, StyleSheet } from "react-native";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import React, { useEffect, useState } from "react";
import { storeData } from "./utils/storage";
import { getData } from "./utils/storage";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Store todos in AsyncStorage whenever there's a change
        storeData("todos", todos);
    }, [todos]);

    useEffect(() => {
        // Function to load todos from AsyncStorage when the app starts
        const loadTodos = async () => {
            const loadedTodos = await getData("todos");
            if (loadedTodos) {
                setTodos(loadedTodos);
            }
        };

        // Call the loadTodos function when the component mounts
        loadTodos();
    }, []);

    const addTodo = (newTodo) => {
        if (
            newTodo.trim() === "" ||
            todos.some((todo) => todo.title === newTodo)
        ) {
            Alert.alert("Error", "Todo cannot be empty or duplicate.");
            return;
        }

        setTodos([
            ...todos,
            { id: todos.length + 1, title: newTodo, completed: false },
        ]);
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
        });
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <View style={styles.container}>
            <TodoForm addTodo={addTodo} />
            <TodoList
                data={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
});

export default App;
