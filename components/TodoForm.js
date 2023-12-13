import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new todo..."
                onChangeText={setText}
                value={text}
            />
            <Button title="Add Todo" onPress={() => addTodo(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    input: {
        width: "80%",
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
    },
});

export default TodoForm;
