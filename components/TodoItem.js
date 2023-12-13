import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function TodoItem({ item, toggleTodo, deleteTodo }) {
    if (!item) {
        return null;
    }

    return (
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
            <View style={styles.itemContainer}>
                <Text
                    style={[
                        styles.itemText,
                        item.completed && styles.itemTextCompleted,
                    ]}>
                    {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
    },
    itemTextCompleted: {
        textDecorationLine: "line-through",
        color: "#aaa",
    },
    deleteText: {
        color: "red",
    },
});

export default TodoItem;
