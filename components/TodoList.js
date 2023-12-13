import { StyleSheet } from "react-native";
import React from "react";
import { View, FlatList } from "react-native";
import TodoItem from "./TodoItem";

const styles = StyleSheet.create({
    container: {
        // Add your container styles here
    },
});

function TodoList({ data }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TodoItem
                        item={item}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={true}
                maxToRenderPerBatch={10}
                updateCellsBatchingPeriod={50}
            />
        </View>
    );
}

export default TodoList;
